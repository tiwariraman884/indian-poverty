import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';

@Controller('blockchain')
export class BlockchainController {
  constructor(private blockchainService: BlockchainService) {}

  @Get('info')
  async getInfo() {
    return this.blockchainService.getBlockchainInfo();
  }

  @Post('grain/create')
  async createGrainAsset(@Body() createDto: any) {
    const { assetId, commodityType, quantity, origin } = createDto;
    return this.blockchainService.createGrainAsset(assetId, commodityType, quantity, origin);
  }

  @Post('grain/distribute')
  async distributeGrain(@Body() distributeDto: any) {
    const { distributionId, fpsId, aadhaarHash, assetId, quantity } = distributeDto;
    return this.blockchainService.distributeGrain(distributionId, fpsId, aadhaarHash, assetId, quantity);
  }

  @Get('grain/trace/:assetId')
  async traceGrainAsset(@Param('assetId') assetId: string) {
    return this.blockchainService.traceGrainAsset(assetId);
  }

  @Post('insurance/create-policy')
  async createPolicy(@Body() policyDto: any) {
    const { policyId, geoCode, beneficiary, triggerType, triggerValue, payoutAmount } = policyDto;
    return this.blockchainService.createInsurancePolicy(
      policyId,
      geoCode,
      beneficiary,
      triggerType,
      triggerValue,
      payoutAmount,
    );
  }

  @Post('insurance/trigger-payout')
  async triggerPayout(@Body() payoutDto: any) {
    const { claimId, policyId, actualValue } = payoutDto;
    return this.blockchainService.triggerInsurancePayout(claimId, policyId, actualValue);
  }

  @Post('insurance/batch-payout')
  async batchPayout(@Body() batchDto: any) {
    const { geoCode, triggerType, actualValue, claimIds } = batchDto;
    return this.blockchainService.batchTriggerPayout(geoCode, triggerType, actualValue, claimIds);
  }
}
