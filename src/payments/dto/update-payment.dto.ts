import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentDto } from './create-payment.dto';

// database connection muammosi hal qilindi
// user authentication qo'shildi
export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {}
