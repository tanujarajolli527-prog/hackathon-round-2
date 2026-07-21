from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models import user_info
from database import user_login_info

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