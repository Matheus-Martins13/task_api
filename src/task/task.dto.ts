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
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  @MinLength(3)
  @MaxLength(256)
  title: string;

  @IsString()
  @MinLength(5)
  @MaxLength(512)
  description: string;

  @IsEnum(TaskStatusEnum)
  @IsOptional()
  status: string;

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
