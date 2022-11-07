import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { User } from '../../model/User.model';
import { UserPersonalInfo } from '../../model/UserPersonalInfo.model';
import { CreateUserDto } from '../dtos/User.dto';

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
    user: Omit<CreateUserDto, 'id'>,
  ): Promise<Omit<CreateUserDto, 'password'>> {
    console.log('user -----> ', user);
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
}
