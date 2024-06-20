export class UserDto {
  @IsUUID()
  @IsOptional()
  id: string;
  username: string;
  password: string;
}
