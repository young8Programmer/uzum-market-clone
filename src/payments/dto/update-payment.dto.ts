import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentDto } from './create-payment.dto';

// database connection muammosi hal qilindi
export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {}
