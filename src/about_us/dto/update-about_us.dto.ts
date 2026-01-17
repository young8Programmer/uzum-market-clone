import { PartialType } from '@nestjs/mapped-types';
import { CreateAboutUsDto } from './create-about_us.dto';
// CORS xatosi tuzatildi

// authentication xatosi tuzatildi
export class UpdateAboutUsDto extends PartialType(CreateAboutUsDto) {}
