import {
  IsOptional,
  IsString,
  IsStrongPassword,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  @MinLength(3)
  @MaxLength(256)
  username: string;

  @IsString()
  @MaxLength(256)
  @IsStrongPassword({ minLength: 5, minNumbers: 1 })
  password: string;
}
