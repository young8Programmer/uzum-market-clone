import { PartialType } from '@nestjs/mapped-types';
// database migrations yaratildi
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {}
// package.json yangilandi
