import { Controller, Get, Query } from '@nestjs/common';
import { DepoimentosService } from '../depoimentos/depoimentos.service';

@Controller('depoimentos-home')
export class DepoimentoHomeController {
  constructor(private readonly depoimentosService: DepoimentosService) {}

  @Get()
  findAll(@Query('skip') skip?: string, @Query('take') take?: string) {
    return this.depoimentosService.findAll({
      take: +take || 3,
      skip: +skip || undefined,
    });
  }
}
