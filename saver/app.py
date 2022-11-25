import csv
from pathlib import Path
from functools import lru_cache

from fastapi import FastAPI
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel


class Data(BaseModel):
    user: str | None
    version: str
    age: int
    sql_experience: str
    type: str
    timestamp: str | None
    from_action_start: int | None
    from_start: int | None
    from_last: int | None
    nps: int | None

    def row(self):
        return (
            self.user, self.version, self.age, self.sql_experience, self.type,
            self.timestamp, self.from_action_start, self.from_start, self.from_last, self.nps
        )


app = FastAPI()

BASE_DIR = Path(__file__).resolve().parent

RESULT_CSV = BASE_DIR / "result.csv"
if not RESULT_CSV.exists():
    with RESULT_CSV.open("w", newline='') as csvfile:
        spamwriter = csv.writer(csvfile, delimiter=';', quotechar='|', quoting=csv.QUOTE_MINIMAL)
        spamwriter.writerow([
            "user", "version", "age", "sql_experience", "type",
            "timestamp", "from_action_start", "from_start", "from_last", "nps"
        ])


static = BASE_DIR / "dist"

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@lru_cache(1)
def page():
    return (static / "index.html").read_text()


@app.post("/save-report-data")
async def save_report(item: Data):
    with RESULT_CSV.open("a", newline='') as csvfile:
        spamwriter = csv.writer(csvfile, delimiter=';', quotechar='|', quoting=csv.QUOTE_MINIMAL)
        spamwriter.writerow(item.row())


@app.get("/download-report-data")
async def download_report():
    return FileResponse(RESULT_CSV)


@app.get("/")
async def index():
    return HTMLResponse(page())


app.mount("/", StaticFiles(directory=str(static)), name="static")
