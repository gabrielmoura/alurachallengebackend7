import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { DepoimentosService } from './depoimentos.service';
import { CreateDepoimentoDto } from './dto/create-depoimento.dto';
import { UpdateDepoimentoDto } from './dto/update-depoimento.dto';

@Controller('depoimentos')
export class DepoimentosController {
  constructor(private readonly depoimentosService: DepoimentosService) {}

  @Post()
  create(@Body() createDepoimentoDto: CreateDepoimentoDto) {
    return this.depoimentosService.create(createDepoimentoDto);
  }

  @Get()
  findAll(@Query('skip') skip?: string, @Query('take') take?: string) {
    return this.depoimentosService.findAll({
      take: +take || undefined,
      skip: +skip || undefined,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.depoimentosService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateDepoimentoDto: UpdateDepoimentoDto,
  ) {
    return this.depoimentosService.update(+id, updateDepoimentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.depoimentosService.remove(+id);
  }
}
