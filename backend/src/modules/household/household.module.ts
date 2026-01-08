import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseholdController } from './household.controller';
import { HouseholdService } from './household.service';
import { Household } from './entities/household.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Household])],
  controllers: [HouseholdController],
  providers: [HouseholdService],
})
export class HouseholdModule {}
