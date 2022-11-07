import { Module } from '@nestjs/common';

import dattebayo from '../dattebayo/dattabayo';

import { UserModule } from './user/user.module';

@Module({
  imports: [dattebayo, UserModule],
  providers: [],
  exports: [],
})
export class AppModule {}
