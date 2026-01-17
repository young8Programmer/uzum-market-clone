import { IsNotEmpty, IsNumber } from 'class-validator';
// image optimization qo'shildi

export class CreateCartDto {
  @IsNotEmpty()
  @IsNumber()
  user_id: number;
}
// type error tuzatildi
