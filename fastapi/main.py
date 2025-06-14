from fastapi import FastAPI
from app.schema import (
    ChatRequest
)
from app.libs import *

app = FastAPI()

cache = InMemoryCache()
set_llm_cache(cache)

# template engine -> design context for rag -> answer more clearly and correctly
template = PromptTemplate.from_template(
"""
{context}

Trả lời câu hỏi sau:
{question}

Trả lời ở đây
"""
)

llm = OllamaLLM(
    base_url = "http://localhost:11434/",
    model = "qwen2.5-coder:0.5b"
)

llm_chain = (
    template 
    | llm
    | StrOutputParser()
)

from app.db import *

@app.on_event("startup")
def connect_db():
    create_table()


@app.post("/prompt")
def prompt(chat_request: ChatRequest, session_db: SessionDeps):
    result = llm_chain.invoke({
        "context": chat_request.context,
        "question": chat_request.prompt
    })

    session_db.add(DataChat(
        prompt = chat_request.prompt, 
        result = result
    ))
    session_db.commit()

    return {
        "result": result
    }
