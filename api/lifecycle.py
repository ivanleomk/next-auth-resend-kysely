from contextlib import asynccontextmanager
from fastapi import FastAPI
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import whisper
from env import get_settings


@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Executing start up events")
    # Load the ML model
    engine = create_engine(get_settings().DATABASE_URL)
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    whisper_model = whisper.load_model("small")

    app.session = SessionLocal
    app.db = engine
    app.whisper_model = whisper_model
    yield
    # Clean up the ML models and release the resources
    print("Shutting down server")
