import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyDto } from './create-company.dto';
// ESLint qoidalariga moslashtirish

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {}
