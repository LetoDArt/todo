import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';

import { AuthService } from '../auth/auth.service';
import { DealService } from './deal.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import {
  DealItemFull,
  DealItemWithoutId,
  RequestAllListQuery,
  RequestUserParams,
} from '../dtos/Deal.dto';

interface ParamMatter {
  id: string;
}

interface ChangeStatusQuery {
  active: boolean;
}

@Controller('deal')
export class DealController {
  constructor(
    private readonly authService: AuthService,
    private readonly dealService: DealService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('/list/:id')
  async getAll(
    @Param() user: RequestUserParams,
    @Query() query?: RequestAllListQuery,
  ): Promise<DealItemFull[]> {
    return this.dealService.getAllDeals(user.id, query.active);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async createNewMatter(
    @Body() deal: DealItemWithoutId,
  ): Promise<DealItemFull> {
    return this.dealService.createDeal(deal);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:id')
  async deleteMatter(@Param() matter: ParamMatter): Promise<DealItemFull[]> {
    return this.dealService.deleteDeal(matter.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/changeStatus/:id')
  async changeStatusMatter(
    @Param() matter: ParamMatter,
    @Query() query: ChangeStatusQuery,
  ): Promise<DealItemFull[]> {
    return this.dealService.changeStatus(matter.id, query.active);
  }
}
