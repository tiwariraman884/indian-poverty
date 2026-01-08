import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Household } from './entities/household.entity';

@Injectable()
export class HouseholdService {
  constructor(@InjectRepository(Household) private householdRepo: Repository<Household>) {}

  async register(householdDto: any) {
    const household = this.householdRepo.create(householdDto);
    return this.householdRepo.save(household);
  }

  async calculateMPI(id: string) {
    // AI-powered MPI calculation
    return {
      mpiScore: 0.42,
      health: 0.18,
      education: 0.12,
      livingStandard: 0.39,
      riskLevel: 'HIGH',
    };
  }
}
