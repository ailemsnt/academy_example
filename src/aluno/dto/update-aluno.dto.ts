import { PartialType } from '@nestjs/mapped-types';
import { CreateAlunoDto } from './create-aluno.dto';
import { IsString } from 'class-validator';

export class UpdateAlunoDto extends PartialType(CreateAlunoDto) {
  @IsString()
  nome!: string;
  @IsString()
  plano!: string; 
}