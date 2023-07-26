import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString } from 'class-validator';

@Entity()
export class Depoimento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, type: 'varchar' })
  @IsString()
  foto: string;

  @Column({ length: 255, type: 'varchar' })
  @IsString()
  depoimento: string;

  @Column({ length: 100, type: 'varchar' })
  @IsString()
  nome: string;
}
