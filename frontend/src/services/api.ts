import axios from 'axios';

const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:3000/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authAPI = {
  login: (data: any) => api.post('/auth/login', data),
  linkABHA: (data: any) => api.post('/auth/abha-link', data),
};

export const householdAPI = {
  register: (data: any) => api.post('/household/register', data),
  getMPI: (id: string) => api.get(`/household/${id}/mpi`),
};

export const healthAPI = {
  scanAnemia: (data: any) => api.post('/health/anemia/scan', data),
  anthropometry: (data: any) => api.post('/health/anthropometry', data),
};

export const welfareAPI = {
  issuePDS: (data: any) => api.post('/pds/issue', data),
  traceBlockchain: (assetId: string) => api.get(`/blockchain/trace/${assetId}`),
};

export const climateAPI = {
  getClimateRisk: (geoCode: string) => api.get(`/climate/risk/${geoCode}`),
  triggerPayout: (data: any) => api.post('/climate/insurance/payout', data),
};

export default api;
