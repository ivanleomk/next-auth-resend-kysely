from fastapi import FastAPI
from requests import Session
from sqlalchemy import Engine
from sqlalchemy.orm import sessionmaker
from whisper import model

class FastAPIModifiedApp(FastAPI):
    session: sessionmaker[Session]
    db: Engine
    whisper_model: model