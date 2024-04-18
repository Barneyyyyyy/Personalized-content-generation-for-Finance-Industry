from pydantic import BaseModel
    
class PromptResponse(BaseModel):
    system_text: str
    user_text: str
    model: str