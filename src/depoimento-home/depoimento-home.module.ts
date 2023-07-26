import { Module } from '@nestjs/common';
import { DepoimentoHomeController } from './depoimento-home.controller';
import { DepoimentosService } from '../depoimentos/depoimentos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Depoimento } from '../depoimentos/entities/depoimento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Depoimento])],
  controllers: [DepoimentoHomeController],
  providers: [DepoimentosService],
})
export class DepoimentoHomeModule {}
