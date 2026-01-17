import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderStatusHistoryDto } from './create-order_status_history.dto';

// bundle size optimallashtirildi
export class UpdateOrderStatusHistoryDto extends PartialType(CreateOrderStatusHistoryDto) {}
