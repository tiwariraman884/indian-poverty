# SAMPARK Stack - Setup Guide

## Quick Start

### Prerequisites
- Node.js 20+
- Python 3.11+
- Docker & Docker Compose
- PostgreSQL 15+ (or use Docker)

### 1. Clone and Install

\\\ash
# Install root dependencies
npm install

# Install all workspace dependencies
npm run install:all
\\\

### 2. Environment Setup

\\\ash
# Copy environment templates
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
\\\

### 3. Start with Docker (Recommended)

\\\ash
# Start all services
npm run docker:up

# Services will be available at:
# - Backend API: http://localhost:3000/v1
# - Frontend: http://localhost:5173
# - AI Services: http://localhost:8000
# - PostgreSQL: localhost:5432
# - TimescaleDB: localhost:5433
# - Redis: localhost:6379
\\\

### 4. Development Mode (Local)

\\\ash
# Terminal 1: Backend
cd backend
npm run start:dev

# Terminal 2: Frontend
cd frontend
npm run dev

# Terminal 3: AI Services
cd ai-services
pip install -r requirements.txt
uvicorn app.main:app --reload
\\\

## Architecture

\\\

   React Frontend
   (Port 5173)   

         
         

  NestJS Gateway 
   (Port 3000)   

            
            
       
        Python AI    
        (Port 8000)  
       
     
     

  PostgreSQL +    
  TimescaleDB +   
  Redis + Kafka   

\\\

## Available Scripts

### Root Level
- 
pm run dev - Start all services in development
- 
pm run build - Build all services
- 
pm run docker:up - Start Docker stack
- 
pm run docker:down - Stop Docker stack

### Backend
- 
pm run start:dev - Dev server with hot reload
- 
pm run build - Build for production
- 
pm run test - Run tests

### Frontend
- 
pm run dev - Vite dev server
- 
pm run build - Production build
- 
pm run preview - Preview production build

## API Endpoints

See [API.md](./API.md) for complete API documentation.

### Health Checks
- Backend: http://localhost:3000/v1
- AI Services: http://localhost:8000/health

## Database Schema

See database/init/01_schema.sql for complete schema.

### Key Tables
- households - Household registry
- mpi_scores - Poverty intelligence scores
- health_screenings - AI health diagnostics
- lockchain_transactions - Welfare tracking
- iot_metrics - Real-time telemetry (TimescaleDB)

## Government Integration

### Aadhaar (UIDAI)
Set in .env:
\\\
AADHAAR_API_KEY=your-key
AADHAAR_API_URL=https://api.uidai.gov.in
\\\

### ABDM (Health Stack)
\\\
ABDM_API_KEY=your-key
ABDM_API_URL=https://api.abdm.gov.in
\\\

## Security

- JWT-based authentication
- Role-based access control (RBAC)
- End-to-end encryption
- CERT-In compliance ready
- DPDP Act 2023 compliant

## Deployment

### Government Cloud (NIC)
1. Build Docker images
2. Push to NIC registry
3. Deploy via Kubernetes

### State Data Centers
Use provided docker-compose.yml for on-premise deployment.

## Support

- **Technical**: tech@sampark.gov.in
- **Integration**: integration@sampark.gov.in
- **Security**: security@sampark.gov.in

## License
Government of India - Public Infrastructure License
