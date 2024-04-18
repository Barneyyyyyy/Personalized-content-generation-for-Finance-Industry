from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.param import param
from routes.chat_req import chat_req
from routes.prompt import prompt

app = FastAPI()
# List of allowed origins (i.e., frontend URLs that can make requests to this backend)
origins = [
    "http://localhost:5173",  # Add the origin of your frontend app here
    "http://127.0.0.1:5173",  # You can add more origins as needed
]

# Add CORSMiddleware to the application
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows specified origins to make requests
    allow_credentials=True,  # Allows cookies to be included in requests
    allow_methods=["*"],  # Allows all HTTP methods
    allow_headers=["*"],  # Allows all headers
)

app.include_router(param)
app.include_router(chat_req)
app.include_router(prompt)
