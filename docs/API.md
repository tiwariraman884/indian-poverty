# SAMPARK Stack™ API Documentation

## Overview
Government-grade API for Digital Poverty Elimination Platform

**Base URL:** https://api.sampark.gov.in/v1  
**Development:** http://localhost:3000/v1

---

## Authentication

### POST /auth/login
Authenticate officials, frontline workers, and partners

**Request Body:**
\\\json
{
  "identifier": "aadhaar|employee_id|mobile",
  "otp": "123456",
  "role": "ASHA|ADMIN|FPS|TEACHER"
}
\\\

**Response:**
\\\json
{
  "accessToken": "jwt_token",
  "refreshToken": "jwt_token",
  "expiresIn": 3600
}
\\\

### POST /auth/abha-link
Link citizen to ABDM Health ID

**Request Body:**
\\\json
{
  "abhaId": "91-xxxx-xxxx-xx",
  "aadhaar": "xxxx",
  "consent": true
}
\\\

---

## Household Management

### POST /household/register
Register new household

**Request Body:**
\\\json
{
  "householdId": "UUID",
  "geo": { "lat": 26.45, "lng": 80.33 },
  "members": 5,
  "rationCard": true,
  "housingType": "kutcha|pucca|3dcp"
}
\\\

### GET /household/:id/mpi
Get real-time MPI score

**Response:**
\\\json
{
  "mpiScore": 0.42,
  "health": 0.18,
  "education": 0.12,
  "livingStandard": 0.39,
  "riskLevel": "HIGH|MEDIUM|LOW"
}
\\\

---

## Health AI

### POST /health/anemia/scan
Non-invasive anemia detection

**Request Body:**
\\\json
{
  "imageBase64": "base64_encoded_image",
  "method": "fingertip|eyelid",
  "abhaId": "91-xxxx"
}
\\\

**Response:**
\\\json
{
  "hb": 9.8,
  "severity": "MODERATE|SEVERE|MILD",
  "confidence": 0.93
}
\\\

### POST /health/anthropometry
AI-based child growth assessment

**Request Body:**
\\\json
{
  "childImage": "base64_image",
  "ageMonths": 28
}
\\\

**Response:**
\\\json
{
  "stunting": true,
  "wasting": false,
  "muac": 11.4
}
\\\

---

## Welfare & Blockchain

### POST /pds/issue
Issue PDS entitlement (blockchain-recorded)

**Request Body:**
\\\json
{
  "fpsId": "FPS-123",
  "aadhaar": "xxxx",
  "commodity": "rice",
  "quantityKg": 5
}
\\\

### GET /blockchain/trace/:assetId
Trace commodity on blockchain

**Response:**
\\\json
{
  "origin": "FCI Punjab",
  "currentHolder": "FPS-123",
  "ledgerHash": "0xabc..."
}
\\\

---

## Climate Intelligence

### GET /climate/risk/:geoCode
Get climate risk assessment

**Response:**
\\\json
{
  "heatRisk": "VERY_HIGH",
  "floodProbability": 0.72
}
\\\

### POST /climate/insurance/payout
Trigger parametric insurance payout

**Request Body:**
\\\json
{
  "geoCode": "GJ-AMD-012",
  "trigger": "HEAT_45C",
  "beneficiaries": 2100
}
\\\

---

## Error Codes

- **400**: Bad Request
- **401**: Unauthorized
- **403**: Forbidden
- **404**: Not Found
- **500**: Internal Server Error

## Rate Limiting
- 1000 requests per minute per API key
- Government portals: 10,000 req/min

## Support
**Technical Support:** tech@sampark.gov.in  
**API Issues:** api-support@sampark.gov.in
