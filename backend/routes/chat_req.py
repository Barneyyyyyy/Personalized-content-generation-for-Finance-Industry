from fastapi import APIRouter, HTTPException
from models.prompt import PromptResponse
import openai
from dotenv import load_dotenv
import os
chat_req = APIRouter()

# Load the environment variables from the .env file
load_dotenv()

# Set your OpenAI API key
openai.api_key = os.getenv('OPENAI_API_KEY')

# Fine-tuned model ID
fine_tuned_model = "ft:gpt-3.5-turbo-0125:personal::99Du0H0D"
    
@chat_req.post("/chat/")
async def chat_with_model(request: PromptResponse):
    try:
        # Use the fine-tuned model to generate a completion
        response = openai.ChatCompletion.create(
            model=request.model,
            messages=[
                {"role": "system", "content": request.system_text},
                {"role": "user", "content": request.user_text},
            ]
        )
        return {"response": response.choices[0].message}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))