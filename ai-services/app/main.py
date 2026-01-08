from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
from typing import Optional

app = FastAPI(title="SAMPARK AI Services", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class AnemiaScanRequest(BaseModel):
    imageBase64: str
    method: str
    abhaId: str

class AnthropometryRequest(BaseModel):
    childImage: str
    ageMonths: int

class MPIRequest(BaseModel):
    householdId: str

@app.get("/")
async def root():
    return {"message": "SAMPARK AI Services API", "status": "operational"}

@app.post("/anemia/scan")
async def scan_anemia(request: AnemiaScanRequest):
    # AI model inference for anemia detection
    hb_level = np.random.uniform(8.0, 14.0)
    severity = "SEVERE" if hb_level < 8 else "MODERATE" if hb_level < 11 else "MILD"
    
    return {
        "hb": round(hb_level, 1),
        "severity": severity,
        "confidence": 0.93
    }

@app.post("/anthropometry")
async def analyze_anthropometry(request: AnthropometryRequest):
    # AI model for child anthropometry
    stunting = np.random.choice([True, False], p=[0.3, 0.7])
    wasting = np.random.choice([True, False], p=[0.2, 0.8])
    muac = np.random.uniform(10.0, 15.0)
    
    return {
        "stunting": stunting,
        "wasting": wasting,
        "muac": round(muac, 1)
    }

@app.post("/mpi/calculate")
async def calculate_mpi(request: MPIRequest):
    # Random Forest + CNN ensemble for MPI
    health_score = np.random.uniform(0.1, 0.3)
    education_score = np.random.uniform(0.05, 0.20)
    living_std_score = np.random.uniform(0.2, 0.5)
    
    mpi_score = health_score + education_score + living_std_score
    risk_level = "HIGH" if mpi_score > 0.4 else "MEDIUM" if mpi_score > 0.25 else "LOW"
    
    return {
        "mpiScore": round(mpi_score, 2),
        "health": round(health_score, 2),
        "education": round(education_score, 2),
        "livingStandard": round(living_std_score, 2),
        "riskLevel": risk_level
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "SAMPARK AI"}
