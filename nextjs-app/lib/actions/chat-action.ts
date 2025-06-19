"use server"

import { API_BE } from "./const";

interface ChatRequest {
    prompt: string;
    context?: string;
}

interface ChatResponse{
    result: string;

}

const chatAction = async (data: ChatRequest): Promise<ChatResponse> => {
    const res = await fetch(`${API_BE}/prompt`,{
        method: "post",
        headers: {
            "Content-Type": "application/json",
            accept: "application/json",
        },
        body: JSON.stringify({
            prompt: data.prompt,
            context: data.context || "",
        }),
        cache: "no-store"
    })

    const result = await res.json();
    console.log("chatAction result", result);
    return result;
}

export {
    chatAction
}
