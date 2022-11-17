import {
  AllowNull,
  Column,
  DataType,
  Default,
  ForeignKey,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

import { User } from './User.model';

@Table({
  tableName: 'deal_item',
})
export class DealItem extends Model {
  @IsUUID(4)
  @Default(uuidv4())
  @PrimaryKey
  @Unique
  @AllowNull(false)
  @Column
  id: string;

  @AllowNull(true)
  @Default('It is kinda name')
  @Column
  name: string;

  @AllowNull(true)
  @Default('To do it')
  @Column(DataType.TEXT('long'))
  text: string;

  @AllowNull(false)
  @Default(new Date().toISOString())
  @Column
  dateOfCreation: string;

  @AllowNull(false)
  @Default(true)
  @Column
  active: boolean;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column
  userId: string;
}
