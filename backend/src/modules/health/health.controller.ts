import { Controller, Post, Body } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private healthService: HealthService) {}

  @Post('anemia/scan')
  async anemiaScan(@Body() scanDto: { imageBase64: string; method: string; abhaId: string }) {
    return this.healthService.scanAnemia(scanDto);
  }

  @Post('anthropometry')
  async anthropometry(@Body() anthroDto: { childImage: string; ageMonths: number }) {
    return this.healthService.analyzeAnthropometry(anthroDto);
  }
}
