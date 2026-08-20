import { Inject, Injectable } from "@nestjs/common";
import { Aluno } from "../@common/entities/aluno.entity";
import { AlunoRepository } from "./aluno.repository";
import { CreateAlunoDto } from "./dto/create-aluno.dto";
import { Repository } from "typeorm";
import { UpdateAlunoDto } from "./dto/update-aluno.dto";

export const TYPEORM_ALUNO_REPOSITORY =
  'TYPEORM_ALUNO_REPOSITORY' as const;

@Injectable()
export class AlunoTypeormRepository implements AlunoRepository {
  constructor(
    @Inject(TYPEORM_ALUNO_REPOSITORY)
    private readonly repository: Repository<Aluno>,
  ) {}

  async get(id: number): Promise<Aluno| null> {
    return this.repository.findOneBy({ id });
  }

  async getAll(): Promise<Aluno[]> {
    return this.repository.find();
  }
  
  async create(aluno: CreateAlunoDto): Promise<Aluno> {
    const alunoEntity = this.repository.create(aluno);
    return this.repository.save(alunoEntity);
  }

  async update(id: number, updateAlunoDto: UpdateAlunoDto): Promise<Aluno | null> {
    await this.repository.update(id, updateAlunoDto);
    return this.repository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
