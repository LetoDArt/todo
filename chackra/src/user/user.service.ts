import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { User } from '../../model/User.model';
import { UserPersonalInfo } from '../../model/UserPersonalInfo.model';
import {
  CreateUserWithoutIdDto,
  CreateUserWithoutPasswordDto,
} from '../dtos/User.dto';

import { hashPassword } from './user.utils';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    @InjectModel(UserPersonalInfo)
    private readonly userProfileInfoModel: typeof UserPersonalInfo,
  ) {}

  async createNewUser(
    user: CreateUserWithoutIdDto,
  ): Promise<CreateUserWithoutPasswordDto> {
    const { email, password, firstName, lastName, gender, phone, birthday } =
      user;

    const hashedPassword = hashPassword(password);
    const resultUser = await this.userModel.create({
      email,
      password: hashedPassword,
    });
    const resultInfo = await this.userProfileInfoModel.create({
      userId: resultUser.id,
      firstName,
      lastName,
      gender,
      phone,
      birthday,
    });
    return {
      id: resultUser.id,
      email: resultUser.email,
      firstName: resultInfo.firstName,
      lastName: resultInfo.lastName,
      gender: resultInfo.gender,
      phone: resultInfo.phone,
      birthday: resultInfo.birthday,
    };
  }

  async findOne(email: string): Promise<User> {
    return await this.userModel.findOne({ where: { email } });
  }
}
