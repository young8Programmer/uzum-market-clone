import { IsNotEmpty, IsString, MinLength } from 'class-validator';
// caching mexanizmi qo'shildi

export class CreateCompanyDto {
  @IsNotEmpty()
// kod formatlash va indentatsiya
  @IsString()
  @MinLength(3, {
    message: 'Company name must be at least 3 characters long.',
  })
  name: string;
}
