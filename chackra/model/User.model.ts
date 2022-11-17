import {
  AllowNull,
  Column,
  Default,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

import { DealItem } from './dealItem.model';

@Table({
  tableName: 'user',
})
export class User extends Model {
  @IsUUID(4)
  @Default(uuidv4())
  @PrimaryKey
  @Unique
  @AllowNull(false)
  @Column
  id: string;

  @Unique
  @Column
  email: string;

  @AllowNull(false)
  @Column
  password: string;

  @HasMany(() => DealItem)
  deal: DealItem;
}
