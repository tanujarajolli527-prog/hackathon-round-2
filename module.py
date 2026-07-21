from pydantic import BaseModel

class user_info(BaseModel):
    username:str
    email:str
    password:str

class user_task_model(BaseModel):
    task_id:int
    task_name:str
    status:bool