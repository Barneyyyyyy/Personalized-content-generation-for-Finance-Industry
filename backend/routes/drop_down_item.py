from fastapi import APIRouter
from models.drop_down_item import DropDownItem
from config.db import conn
from schemas.drop_down_item import serializeDict, serializeList
from bson import ObjectId
drop_down_item = APIRouter()


@drop_down_item.get('/')
async def find_all_drop_down_items():
    return serializeList(conn.content_generation.dropdown_lists.find())


@drop_down_item.get('/{id}')
async def find_drop_down_item(id):
    return serializeDict(conn.content_generation.dropdown_lists.find_one({"_id": ObjectId(id)}))
