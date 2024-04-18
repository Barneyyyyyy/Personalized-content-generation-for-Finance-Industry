from fastapi import APIRouter
from models.param import Param
from config.db import conn
from schemas.param import serializeDict, serializeList
from bson import ObjectId
param = APIRouter()

@param.get('/params')
async def find_all_params():
    return serializeList(conn.content_generation.dropdown_lists.find())