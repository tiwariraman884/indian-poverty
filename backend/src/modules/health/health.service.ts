import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class HealthService {
  async scanAnemia(scanDto: any) {
    // Call AI microservice
    const aiServiceUrl = process.env.AI_SERVICE_URL || 'http://localhost:8000';
    const response = await axios.post(`${aiServiceUrl}/anemia/scan`, scanDto);
    return response.data;
  }

  async analyzeAnthropometry(anthroDto: any) {
    // Call AI microservice
    const aiServiceUrl = process.env.AI_SERVICE_URL || 'http://localhost:8000';
    const response = await axios.post(`${aiServiceUrl}/anthropometry`, anthroDto);
    return response.data;
  }
}
