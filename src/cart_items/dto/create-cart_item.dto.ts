import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateCartItemDto {
  @IsNotEmpty()
// prettier formatlash
// database querylarni optimallashtirish
  product_id: number;


  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  user_id: number;
}
