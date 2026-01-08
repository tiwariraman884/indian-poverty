import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { HouseholdService } from './household.service';

@Controller('household')
export class HouseholdController {
  constructor(private householdService: HouseholdService) {}

  @Post('register')
  async register(@Body() householdDto: any) {
    return this.householdService.register(householdDto);
  }

  @Get(':id/mpi')
  async getMPI(@Param('id') id: string) {
    return this.householdService.calculateMPI(id);
  }
}
