import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsStrongPassword,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserDto {
  @ApiProperty({
    description:
      'O id é um campo uuid utilizado como identificador único do user na base de dados',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsUUID()
  @IsOptional()
  id: string;

  @ApiProperty({
    description: 'O username é o nome de usuário',
    example: 'matheus martins',
  })
  @IsString()
  @MinLength(3)
  @MaxLength(256)
  username: string;

  @ApiProperty({
    description: 'O password é a senha do usuário. Espera uma senha forte',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsString()
  @MaxLength(256)
  @IsStrongPassword()
  password: string;
}

export class UserRouteParameters {
  @IsString()
  @MinLength(3)
  @MaxLength(256)
  username: string;
}
