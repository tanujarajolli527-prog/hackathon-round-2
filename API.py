from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from module import user_info, user_task_model
from database import user_login_info, user_tasks

from fastapi.middleware.cors import CORSMiddleware

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/login")
def new_user(user_data:user_info):
    for i in range (0, len(user_login_info)):
        if user_login_info[i]["username"]==user_data.username and user_login_info[i]["password"]==user_data.password:
            return {
                "message":"Getting logged you in",
                "username": user_data.username
            }
    user_login_info.append(user_data)
    return {
            "message":"user created",
            "username": user_data.username
        }

@app.get("/users")
def get():
    return user_login_info

@app.post("user/task/{task_id}")
def post_task(task:user_task_model):
    user_tasks.append(task)
    return{
        "message":"Task Added",
        "task": task
    }
