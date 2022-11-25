from python:3.10-slim

RUN python -m pip install fastapi uvicorn

COPY ./app.py /app.py
COPY ./dist /dist

EXPOSE 8000
