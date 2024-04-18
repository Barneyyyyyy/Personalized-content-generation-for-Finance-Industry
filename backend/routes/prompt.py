from fastapi import APIRouter, Query
from models.prompt import PromptResponse
from config.db import conn
from schemas.prompt import serializeDict
from bson import ObjectId
prompt = APIRouter()

@prompt.get("/prompt/", response_model=PromptResponse)
async def find_prompt(account_type: str = Query(...), audience: str = Query(...), content_type: str = Query(...), model: str = Query(...)):

    prompt = conn.content_generation.prompts.find_one({
        "account_type": account_type,
        "audience": audience,
        "content_type": content_type,
    })

    if prompt:
        return PromptResponse(system_text=prompt["system_text"], user_text=prompt["user_text"], model=model)
    else:
        return {"message": "Prompt not found"}