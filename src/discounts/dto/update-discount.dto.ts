import { PartialType } from '@nestjs/mapped-types';
// kod formatlash va indentatsiya
// database connection muammosi hal qilindi
import { CreateDiscountDto } from './create-discount.dto';

export class UpdateDiscountDto extends PartialType(CreateDiscountDto) {}
