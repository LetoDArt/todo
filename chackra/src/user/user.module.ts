import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AuthModule } from '../auth/auth.module';

import { UserService } from './user.service';
import { UserController } from './user.controller';

import { User } from '../../model/User.model';
import { UserPersonalInfo } from '../../model/UserPersonalInfo.model';

@Module({
  imports: [SequelizeModule.forFeature([User, UserPersonalInfo]), AuthModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
