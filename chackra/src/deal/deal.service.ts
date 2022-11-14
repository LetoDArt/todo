import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { DealItem } from '../../model/dealItem.model';
import { DealItemFull, DealItemWithoutId } from '../dtos/Deal.dto';

@Injectable()
export class DealService {
  constructor(
    @InjectModel(DealItem)
    private readonly dealItem: typeof DealItem,
  ) {}

  async getAllDeals(userId: string, active?: boolean): Promise<DealItemFull[]> {
    const conditions = { userId, active };
    if (typeof active !== 'boolean') delete conditions.active;
    return this.dealItem.findAll({ where: conditions });
  }

  async createDeal(deal: DealItemWithoutId): Promise<DealItemFull> {
    const { name, text, active, userId } = deal;

    const dealDB = await this.dealItem.create({
      name,
      text,
      active,
      userId,
    });

    return {
      id: dealDB.id,
      name: dealDB.name,
      text: dealDB.text,
      dateOfCreation: dealDB.dateOfCreation,
      active: dealDB.active,
      userId: dealDB.userId,
    };
  }
}
