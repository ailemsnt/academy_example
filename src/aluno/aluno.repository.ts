import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Injectable } from "@nestjs/common";
import { Aluno } from "../@common/entities/aluno.entity";
import { CreateAlunoDto } from "./dto/create-aluno.dto";

@Injectable()
export abstract class AlunoRepository {
  abstract create(aluno: CreateAlunoDto): Promise<Aluno>;

  abstract get(id: number): Promise<Aluno | null>;

  abstract getAll(): Promise<Aluno[]>;

  abstract update(id: number, updateAlunoDto: UpdateAlunoDto): Promise<Aluno | null>;

  abstract remove(id: number): Promise<void>;
}