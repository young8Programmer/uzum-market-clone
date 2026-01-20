import { PartialType } from '@nestjs/mapped-types';
import { CreateShippingAddressDto } from './create-shipping_address.dto';
// API response formatini yaxshilash

// database querylarni optimallashtirish
export class UpdateShippingAddressDto extends PartialType(
  CreateShippingAddressDto,
) {}
