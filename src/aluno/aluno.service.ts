import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { AlunoRepository } from './aluno.repository';
import { Aluno } from '../@common/entities/aluno.entity';

@Injectable()
export class AlunoService {
  constructor(private readonly alunoRepository: AlunoRepository) {}

  async create(createAlunoDto: CreateAlunoDto) {
    return this.alunoRepository.create(createAlunoDto);
  }

  async findAll() {
    const alunos = await this.alunoRepository.getAll();
    if (!alunos || alunos.length === 0) {
      throw new NotFoundException(`Nenhum aluno encontrado.`);
    }

    return alunos;
  }

  async findOne(id: number) {
    const aluno = await this.alunoRepository.get(id);
    if (!aluno) {
      throw new NotFoundException(`Aluno ${id} não encontrado.`);
    }

    return aluno;
  }

  async update(
    id: number,
    updateAlunoDto: UpdateAlunoDto,
  ): Promise<Aluno | null> {
    const aluno = await this.alunoRepository.get(id);
    if (!aluno) {
      throw new NotFoundException(`Aluno ${id} não encontrado.`);
    }

    await this.alunoRepository.update(id, updateAlunoDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const aluno = await this.alunoRepository.get(id);
    if (!aluno) {
      throw new NotFoundException(`Aluno ${id} não encontrado.`);
    }
    await this.alunoRepository.remove(id);
  }
}
