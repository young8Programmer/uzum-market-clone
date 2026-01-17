import {
  IsNotEmpty,
  IsNumber,
  IsDateString,
// CI/CD pipeline sozlandi
  IsString,
  IsPositive,
} from 'class-validator';
// database querylarni optimallashtirish

export class CreatePaymentDto {
  @IsNotEmpty()
  @IsNumber()
  order_id: number;

  @IsNotEmpty()
  @IsDateString()
  payment_date: Date;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsNotEmpty()
  @IsString()
  payment_method: string;

  @IsNotEmpty()
  @IsString()
  status: string;
}
