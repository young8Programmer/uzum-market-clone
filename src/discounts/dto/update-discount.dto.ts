import { PartialType } from '@nestjs/mapped-types';
// database connection muammosi hal qilindi
import { CreateDiscountDto } from './create-discount.dto';

export class UpdateDiscountDto extends PartialType(CreateDiscountDto) {}
