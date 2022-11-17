import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { v4 as uuidv4 } from 'uuid';

import { DealItem } from '../../model/dealItem.model';
import { DealItemFull, DealItemWithoutId, UpdateDeal } from '../dtos/Deal.dto';

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

  async createDeal(deal: DealItemWithoutId): Promise<DealItemFull[]> {
    const { name, text, active, userId } = deal;

    const dealDB = await this.dealItem.create({
      id: uuidv4(),
      name,
      text,
      active,
      userId,
      dateOfCreation: new Date().toISOString(),
    });

    return await this.dealItem.findAll({
      where: { userId: dealDB.userId },
      order: [['dateOfCreation', 'ASC']],
    });
  }

  async deleteDeal(dealId: string, userId: string): Promise<DealItemFull[]> {
    await this.dealItem.destroy({
      where: {
        id: dealId,
      },
    });
    return await this.dealItem.findAll({
      where: { userId },
      order: [['dateOfCreation', 'ASC']],
    });
  }

  async changeStatus(
    dealId: string,
    active: boolean,
    userId: string,
  ): Promise<DealItemFull[]> {
    await this.dealItem.update(
      {
        active,
      },
      {
        where: {
          id: dealId,
        },
      },
    );
    return await this.dealItem.findAll({
      where: { userId },
      order: [['dateOfCreation', 'ASC']],
    });
  }

  async changeMatter(
    { id, active, text, name }: UpdateDeal,
    userId,
  ): Promise<DealItemFull[]> {
    await this.dealItem.update(
      {
        active,
        text,
        name,
      },
      {
        where: {
          id: id,
        },
      },
    );
    return await this.dealItem.findAll({
      where: { userId },
      order: [['dateOfCreation', 'ASC']],
    });
  }
}
