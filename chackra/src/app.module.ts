import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import dattebayo from '../dattebayo/dattabayo';

import { UserModule } from './user/user.module';

@Module({
  imports: [dattebayo, UserModule, ConfigModule.forRoot()],
  providers: [],
  exports: [],
})
export class AppModule {}
