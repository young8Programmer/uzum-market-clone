import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

// user authentication qo'shildi
export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
