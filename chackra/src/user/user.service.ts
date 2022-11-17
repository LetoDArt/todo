import { Op } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { checkPassword, hashPassword } from './user.utils';

import { User } from '../../model/User.model';
import { UserPersonalInfo } from '../../model/UserPersonalInfo.model';
import {
  CreateUserFullDto,
  CreateUserWithoutIdDto,
  CreateUserWithoutPasswordDto,
} from '../dtos/User.dto';

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
      id: uuidv4(),
      email,
      password: hashedPassword,
    });
    const resultInfo = await this.userProfileInfoModel.create({
      id: uuidv4(),
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

  async updateUser(
    user: CreateUserFullDto,
  ): Promise<CreateUserWithoutPasswordDto> {
    const userDB = await this.userModel.findOne({ where: { id: user.id } });
    const infoDB = await this.userProfileInfoModel.findOne({
      where: { userId: user.id },
    });

    const checkEmail = await this.userModel.findOne({
      where: { [Op.not]: { id: [user.id] }, email: user.email },
    });
    if (checkEmail) {
      throw new HttpException(
        'This email already exists',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const coincidePassword = checkPassword(user.password, userDB.password);
    const hashedPassword = coincidePassword
      ? userDB.password
      : hashPassword(user.password);

    await this.userModel.update(
      {
        email:
          user?.email && user?.email !== userDB?.email
            ? user.email
            : userDB.email,
        password: hashedPassword,
      },
      { where: { id: user.id } },
    );
    await this.userProfileInfoModel.update(
      {
        firstName:
          user?.firstName && user?.firstName !== infoDB?.firstName
            ? user?.firstName
            : infoDB?.firstName,
        lastName:
          user?.lastName && user?.lastName !== infoDB?.lastName
            ? user?.lastName
            : infoDB?.lastName,
        gender:
          user?.gender && user?.gender !== infoDB?.gender
            ? user?.gender
            : infoDB?.gender,
        phone:
          user?.phone && user?.phone !== infoDB?.phone
            ? user?.phone
            : infoDB?.phone,
        birthday:
          user?.birthday && user?.birthday !== infoDB?.birthday
            ? user?.birthday
            : infoDB?.birthday,
      },
      { where: { userId: user.id } },
    );

    const userResult = await this.userModel.findOne({ where: { id: user.id } });
    const infoResult = await this.userProfileInfoModel.findOne({
      where: { userId: user.id },
    });

    return {
      id: user.id,
      email: userResult.email,
      firstName: infoResult.firstName,
      lastName: infoResult.lastName,
      gender: infoResult.gender,
      phone: infoResult.phone,
      birthday: infoResult.birthday,
    };
  }
}
