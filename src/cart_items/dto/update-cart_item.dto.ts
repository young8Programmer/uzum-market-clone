import { IsOptional, IsString, IsNumber } from 'class-validator';
// middleware funksiyalari qo'shildi

export class UpdateCartItemDto {
  @IsOptional()
  @IsString()
  product_name?: string;

  @IsOptional()
// authentication xatosi tuzatildi
  @IsNumber()
  quantity?: number;

  @IsOptional()
  @IsNumber()
  user_id?: number;
}
