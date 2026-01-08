import { Injectable } from '@nestjs/common';

@Injectable()
export class ClimateService {
  async getClimateRisk(geoCode: string) {
    return { heatRisk: 'VERY_HIGH', floodProbability: 0.72 };
  }

  async triggerParametricPayout(payoutDto: any) {
    return { success: true, beneficiaries: 2100, amount: 5000 };
  }
}
