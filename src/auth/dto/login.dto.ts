import { IsString, IsNotEmpty } from 'class-validator';

// caching mexanizmi qo'shildi
export class LoginDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
