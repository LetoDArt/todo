import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';

import { AuthService } from '../auth/auth.service';
import { DealService } from './deal.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import {
  DealItemFull,
  DealItemWithoutId,
  RequestAllListQuery,
  RequestUserParams,
  UpdateDeal,
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
  ): Promise<DealItemFull[]> {
    return this.dealService.createDeal(deal);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:id')
  async deleteMatter(
    @Request() req,
    @Param() matter: ParamMatter,
  ): Promise<DealItemFull[]> {
    return this.dealService.deleteDeal(matter.id, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/changeStatus/:id')
  async changeStatusMatter(
    @Request() req,
    @Param() matter: ParamMatter,
    @Query() query: ChangeStatusQuery,
  ): Promise<DealItemFull[]> {
    console.log(req.user);
    return this.dealService.changeStatus(
      matter.id,
      query.active,
      req.user.userId,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Put('/change')
  async changeMatter(
    @Request() req,
    @Body() matter: UpdateDeal,
  ): Promise<DealItemFull[]> {
    return this.dealService.changeMatter(matter, req.user.userId);
  }
}
