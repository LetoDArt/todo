import {
  AllowNull,
  BelongsTo,
  Column,
  Default,
  ForeignKey,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import { User } from './User.model';

@Table({
  tableName: 'user_personal_info',
})
export class UserPersonalInfo extends Model {
  @ForeignKey(() => User)
  @AllowNull(false)
  @Unique
  @Column
  userId: string;

  @BelongsTo(() => User)
  user: User;

  @AllowNull(true)
  @Column
  firstName: string;

  @AllowNull(true)
  @Column
  lastName: string;

  @AllowNull(true)
  @Default('male')
  @Column
  gender: string;

  @AllowNull(false)
  @Default(new Date(0).toString())
  @Column
  birthday: string;

  @AllowNull(true)
  @Column
  phone: string;
}
