-- SAMPARK Stack Database Schema
-- PostgreSQL + TimescaleDB

CREATE EXTENSION IF NOT EXISTS postgis;
CREATE EXTENSION IF NOT EXISTS timescaledb;

-- Households Table
CREATE TABLE households (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  geo_code VARCHAR(50) NOT NULL,
  geo GEOGRAPHY(POINT),
  members INTEGER NOT NULL,
  ration_card BOOLEAN DEFAULT FALSE,
  housing_type VARCHAR(20) CHECK (housing_type IN ('kutcha', 'pucca', '3dcp')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Household Members
CREATE TABLE household_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  household_id UUID REFERENCES households(id) ON DELETE CASCADE,
  abha_id VARCHAR(20),
  aadhaar_hash VARCHAR(64),
  age INTEGER,
  gender VARCHAR(10),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- MPI Scores
CREATE TABLE mpi_scores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  household_id UUID REFERENCES households(id) ON DELETE CASCADE,
  mpi_score FLOAT,
  health FLOAT,
  education FLOAT,
  living_standard FLOAT,
  risk_level VARCHAR(20),
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Health Screenings
CREATE TABLE health_screenings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  abha_id VARCHAR(20),
  type VARCHAR(50),
  result JSONB,
  ai_confidence FLOAT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Blockchain Transactions
CREATE TABLE blockchain_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tx_hash VARCHAR(66) UNIQUE NOT NULL,
  asset_id VARCHAR(100),
  type VARCHAR(50),
  data JSONB,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- IoT Metrics (TimescaleDB Hypertable)
CREATE TABLE iot_metrics (
  time TIMESTAMPTZ NOT NULL,
  device_id VARCHAR(100) NOT NULL,
  metric VARCHAR(50) NOT NULL,
  value FLOAT NOT NULL,
  unit VARCHAR(20),
  metadata JSONB
);

SELECT create_hypertable('iot_metrics', 'time');

-- Indexes
CREATE INDEX idx_households_geo ON households USING GIST(geo);
CREATE INDEX idx_mpi_household ON mpi_scores(household_id);
CREATE INDEX idx_health_abha ON health_screenings(abha_id);
CREATE INDEX idx_blockchain_asset ON blockchain_transactions(asset_id);
CREATE INDEX idx_iot_device_time ON iot_metrics(device_id, time DESC);

-- Sample Data
INSERT INTO households (geo_code, members, ration_card, housing_type) 
VALUES ('UP-LKO-001', 5, TRUE, 'kutcha');
