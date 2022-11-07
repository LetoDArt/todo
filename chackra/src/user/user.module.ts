import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../../model/User.model';
import { UserPersonalInfo } from '../../model/UserPersonalInfo.model';

@Module({
  imports: [SequelizeModule.forFeature([User, UserPersonalInfo])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
