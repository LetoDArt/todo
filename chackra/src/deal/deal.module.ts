import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AuthModule } from '../auth/auth.module';
import { DealItem } from '../../model/dealItem.model';

import { DealService } from './deal.service';
import { DealController } from './deal.controller';

@Module({
  imports: [SequelizeModule.forFeature([DealItem]), AuthModule],
  providers: [DealService],
  controllers: [DealController],
})
export class DealModule {}
