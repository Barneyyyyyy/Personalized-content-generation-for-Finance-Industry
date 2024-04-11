# Normal way
def dropDownItemEntity(item) -> dict:
    return {
        "type": str(item["_id"]),
        "name": item["name"],
        "options": item["email"],
    }


def dropDownItemsEntity(entity) -> list:
    return [dropDownItemEntity(item) for item in entity]
# Best way


def serializeDict(a) -> dict:
    return {**{i: str(a[i]) for i in a if i == '_id'}, **{i: a[i] for i in a if i != '_id'}}


def serializeList(entity) -> list:
    return [serializeDict(a) for a in entity]
