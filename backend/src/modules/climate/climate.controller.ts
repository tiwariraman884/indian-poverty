import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ClimateService } from './climate.service';

@Controller('climate')
export class ClimateController {
  constructor(private climateService: ClimateService) {}

  @Get('risk/:geoCode')
  async getClimateRisk(@Param('geoCode') geoCode: string) {
    return this.climateService.getClimateRisk(geoCode);
  }

  @Post('insurance/payout')
  async triggerPayout(@Body() payoutDto: any) {
    return this.climateService.triggerParametricPayout(payoutDto);
  }
}
