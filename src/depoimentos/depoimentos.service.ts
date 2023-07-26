import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { from, map, Observable, tap } from 'rxjs';

import { CreateDepoimentoDto } from './dto/create-depoimento.dto';
import { UpdateDepoimentoDto } from './dto/update-depoimento.dto';
import { Depoimento } from './entities/depoimento.entity';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';

interface IPaginate {
  skip?: number;
  take?: number;
}

@Injectable()
export class DepoimentosService {
  constructor(
    @InjectRepository(Depoimento)
    private readonly depoimentoRepository: Repository<Depoimento>,
  ) {}

  create(createDepoimentoDto: CreateDepoimentoDto) {
    const depoimento = new Depoimento();
    Object.assign(depoimento, createDepoimentoDto);
    return from(this.depoimentoRepository.save(depoimento));
  }

  findAll({ skip, take }: IPaginate): Observable<Depoimento[]> {
    return from(this.depoimentoRepository.find({ skip, take }));
  }

  findOne(id: number): Observable<Depoimento> {
    return from(this.depoimentoRepository.findOneBy({ id })).pipe(
      map((depoimento: Depoimento) => {
        if (depoimento === null)
          throw new HttpException(
            'Depoimento não encontrado',
            HttpStatus.NOT_FOUND,
          );
        return depoimento;
      }),
    );
  }

  update(
    id: number,
    updateDepoimentoDto: UpdateDepoimentoDto,
  ): Observable<Depoimento> {
    return fromPromise(
      this.depoimentoRepository.update({ id }, updateDepoimentoDto).then(() => {
        return this.depoimentoRepository.findOneBy({ id });
      }),
    );
  }

  remove(id: number) {
    return from(this.depoimentoRepository.delete({ id }));
  }
}
