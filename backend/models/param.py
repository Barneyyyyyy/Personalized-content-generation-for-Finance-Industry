from pydantic import BaseModel

class Param(BaseModel):
    type: str
    name: str
    options: list[object]