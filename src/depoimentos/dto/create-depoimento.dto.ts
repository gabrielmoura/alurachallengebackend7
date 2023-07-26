import { IsString, Max } from 'class-validator';

export class CreateDepoimentoDto {
  @Max(255)
  @IsString()
  foto: string;

  @Max(255)
  @IsString()
  depoimento: string;

  @Max(50)
  @IsString()
  nome: string;
}
