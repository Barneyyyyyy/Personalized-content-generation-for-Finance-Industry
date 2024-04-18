# Normal way
def promptEntity(item) -> dict:
    return {
        "id": str(item["_id"]),
        "content_type": item["content_type"],
        "audience": item["audience"],
        "account_type": item["account_type"],
        "system_text": item["system_text"],
        "user_text": item["user_text"],
    }


def promptsEntity(entity) -> list:
    return [promptEntity(item) for item in entity]
# Best way


def serializeDict(a) -> dict:
    return {**{i: str(a[i]) for i in a if i == '_id'}, **{i: a[i] for i in a if i != '_id'}}


def serializeList(entity) -> list:
    return [serializeDict(a) for a in entity]
