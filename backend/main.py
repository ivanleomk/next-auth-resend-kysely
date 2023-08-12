from fastapi import FastAPI, File, UploadFile
from models.app import FastAPIModifiedApp
from typing import cast
from lifecycle import lifespan
import tempfile

app = FastAPI(lifespan=lifespan)
app = cast(FastAPIModifiedApp,app) 


@app.post("/transcribe")
async def transcribe(file:UploadFile = File(...)):
    # TODO: Implement Whisper Transcription ( This will work off a queue, we'll need to implement a queue system )
    with tempfile.NamedTemporaryFile(delete=False) as temp_file:
      print(f"Saving temp file to {temp_file.name}")
      temp_file.write(await file.read())
      temp_file_path = temp_file.name
      # Now you can use `temp_file_path` to access the temporary file
      result = app.whisper_model.transcribe(temp_file_path)
      
    return {"message": result["text"]}


