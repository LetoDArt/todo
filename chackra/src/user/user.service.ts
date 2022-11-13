import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

    const userDB = await this.findOne(email);
    if (userDB) {
      throw new HttpException(
        'User with that email already exists',
        HttpStatus.UNAUTHORIZED,
      );
    }

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

  async getUserInfo(id: string): Promise<CreateUserWithoutPasswordDto> {
    const options = (key: string) => ({ where: { [key]: id } });

    const info = await this.userProfileInfoModel.findOne(options('userId'));
    const user = await this.userModel.findOne(options('id'));

    return {
      id: info.userId,
      email: user.email,
      firstName: info.firstName,
      lastName: info.lastName,
      gender: info.gender,
      phone: info.phone,
      birthday: info.birthday,
    };
  }
}
