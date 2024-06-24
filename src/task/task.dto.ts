import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export enum TaskStatusEnum {
  TO_DO = 'TO_DO',
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
}

export class TaskDto {
  @ApiProperty({
    description:
      'O id é um campo uuid utilizado como identificador único da task na base de dados',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsUUID()
  @IsOptional()
  id: string;

  @ApiProperty({
    description: 'O title é responsável pelo nome da task',
    example: 'Realizar tarefas de casa',
  })
  @IsString()
  @MinLength(3)
  @MaxLength(256)
  title: string;

  @ApiProperty({
    description:
      'O description é responsável por dar uma descrição para a task',
    example: 'Realizar as tarefas pendentes de português e matemática',
  })
  @IsString()
  @MinLength(5)
  @MaxLength(512)
  description: string;

  @ApiProperty({
    enum: TaskStatusEnum,
    description: 'O status é responsável por dizer a situação da task',
    example: 'TO_DO',
  })
  @IsEnum(TaskStatusEnum)
  @IsOptional()
  status: string;

  @ApiProperty({
    description:
      'O expirationDate é responsável por dizer quando a task expira. Recebe um datestring',
    example: '2024-01-01T00:00:00.000Z',
  })
  @IsDateString()
  expirationDate: Date;
}

export class FindAllParameters {
  @IsString()
  @MinLength(3)
  @MaxLength(256)
  @IsOptional()
  title: string;

  @IsEnum(TaskStatusEnum)
  @IsOptional()
  status: string;
}

export class TaskRouteParameters {
  @IsUUID()
  id: string;
}

export interface ReturnTypeActionHttp {
  message: string;
}
