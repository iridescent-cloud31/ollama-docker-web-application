import requests
from fastapi import FastAPI, Response

# Database
from db import (
    create_chat,
    get_all_chats,
    get_chat_by_id,
    delete_chat,
    DataChat,
    path_db
)

# Langchain
from langchain_ollama import OllamaLLM # Ollama model
from langchain_ollama.llms import BaseLLM # Lớp cơ sở của LLM
from langchain.chains.llm import LLMChain # xử lí chuỗi các LLM
from langchain.chains.sql_database.query import create_sql_query_chain # tạo câu truy vấn cơ sở dữ liệu từ llm
from langchain.prompts import PromptTemplate # tạo câu truy vấn từ mẫu
from langchain_community.tools import QuerySQLDataBaseTool # công cụ truy vấn cơ sở dữ liệu
from langchain.sql_database import SQLDatabase # cơ sở dữ liệu
from langchain_core.output_parsers import StrOutputParser, PydanticOutputParser # xử lí kết quả trả về là kiểu dữ liệu chuỗi
from langchain_core.runnables import RunnablePassthrough # truyền đa dạng đối số
from operator import itemgetter # lấy giá trị từ dict
# Cache
from langchain.cache import InMemoryCache
from langchain.globals import set_llm_cache
#--------------------------------------------------

# Utility
from utils import get_sql_from_answer_llm

