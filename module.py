from pydantic import BaseModel

class user_info(BaseModel):
    username:str
    password:str