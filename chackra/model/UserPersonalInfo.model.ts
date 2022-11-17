import {
  AllowNull,
  BelongsTo,
  Column,
  Default,
  ForeignKey,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { User } from './User.model';
import { v4 as uuidv4 } from 'uuid';

@Table({
  tableName: 'user_personal_info',
})
export class UserPersonalInfo extends Model {
  @IsUUID(4)
  @Default(uuidv4())
  @PrimaryKey
  @Unique
  @AllowNull(false)
  @Column
  id: string;

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
