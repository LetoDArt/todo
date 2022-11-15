import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { v4 as uuidv4 } from 'uuid';

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
    return this.dealItem.findAll({
      where: conditions,
      order: [['dateOfCreation', 'ASC']],
    });
  }

  async createDeal(deal: DealItemWithoutId): Promise<DealItemFull> {
    const { name, text, active, userId } = deal;

    const dealDB = await this.dealItem.create({
      id: uuidv4(),
      name,
      text,
      active,
      userId,
      dateOfCreation: new Date().toISOString(),
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

  async deleteDeal(dealId: string): Promise<DealItemFull[]> {
    await this.dealItem.destroy({
      where: {
        id: dealId,
      },
    });
    return await this.dealItem.findAll({ order: [['dateOfCreation', 'ASC']] });
  }

  async changeStatus(dealId: string, active: boolean): Promise<DealItemFull[]> {
    await this.dealItem.update(
      {
        active: active,
      },
      {
        where: {
          id: dealId,
        },
      },
    );
    return await this.dealItem.findAll({ order: [['dateOfCreation', 'ASC']] });
  }
}
