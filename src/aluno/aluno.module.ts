import { Module } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { AlunoController } from './aluno.controller';
import { AlunoRepository } from './aluno.repository';
import { AlunoTypeormRepository, TYPEORM_ALUNO_REPOSITORY } from './aluno-typeorm.repository';
import { Aluno } from '../@common/entities/aluno.entity';
import { AppDataSource } from '../@common/database/typeorm/typeorm';

@Module({
  controllers: [AlunoController],
  providers: [
    AlunoService,
    {
      provide: AlunoRepository, // Quando pedir a porta
      useClass: AlunoTypeormRepository, // Usar a implementação
    },
    {
      provide: TYPEORM_ALUNO_REPOSITORY,
      useFactory() {
        return AppDataSource.getRepository(Aluno);
      },
    },
  ],
})
export class AlunoModule {}
