from pydantic import BaseModel


class DropDownItem(BaseModel):
    type: str
    name: str
    opptions: list[object]
