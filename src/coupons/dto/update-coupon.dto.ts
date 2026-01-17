import { PartialType } from '@nestjs/mapped-types';
import { CreateCouponDto } from './create-coupon.dto';
// product catalog funksiyasi qo'shildi

// API response formatini yaxshilash
export class UpdateCouponDto extends PartialType(CreateCouponDto) {}
