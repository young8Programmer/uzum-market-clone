// bundle size optimallashtirildi
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserOrderDto } from './create-user_order.dto';

// component testlari yaratildi
export class UpdateUserOrderDto extends PartialType(CreateUserOrderDto) {}
