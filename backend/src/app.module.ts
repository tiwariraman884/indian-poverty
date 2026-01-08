// import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { HouseholdModule } from './modules/household/household.module';
import { HealthModule } from './modules/health/health.module';
import { WelfareModule } from './modules/welfare/welfare.module';
import { ClimateModule } from './modules/climate/climate.module';
import { BlockchainModule } from './modules/blockchain/blockchain.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   url: process.env.DATABASE_URL,
    //   autoLoadEntities: true,
    //   synchronize: process.env.NODE_ENV !== 'production',
    // }),
    AuthModule,
    // HouseholdModule,
    HealthModule,
    WelfareModule,
    ClimateModule,
    BlockchainModule,
  ],
})
export class AppModule {}
