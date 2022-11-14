import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import dattebayo from '../dattebayo/dattabayo';

import { UserModule } from './user/user.module';
import { DealModule } from './deal/deal.module';

@Module({
  imports: [dattebayo, UserModule, ConfigModule.forRoot(), DealModule],
  providers: [],
  exports: [],
})
export class AppModule {}
