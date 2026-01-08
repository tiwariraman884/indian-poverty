import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WelfareService } from './welfare.service';

@Controller()
export class WelfareController {
  constructor(private welfareService: WelfareService) {}

  @Post('pds/issue')
  async issuePDS(@Body() pdsDto: any) {
    return this.welfareService.issuePDS(pdsDto);
  }

  @Get('blockchain/trace/:assetId')
  async traceAsset(@Param('assetId') assetId: string) {
    return this.welfareService.traceBlockchain(assetId);
  }
}
