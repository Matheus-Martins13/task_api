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
  @IsStrongPassword()
  password: string;
}

export class UserRouteParameters {
  @IsString()
  @MinLength(3)
  @MaxLength(256)
  username: string;
}
