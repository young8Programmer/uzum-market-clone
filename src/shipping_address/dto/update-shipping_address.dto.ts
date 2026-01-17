import { PartialType } from '@nestjs/mapped-types';
import { CreateShippingAddressDto } from './create-shipping_address.dto';

// database querylarni optimallashtirish
export class UpdateShippingAddressDto extends PartialType(
  CreateShippingAddressDto,
) {}
