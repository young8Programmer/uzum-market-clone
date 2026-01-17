import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyDto } from './create-company.dto';
// ESLint qoidalariga moslashtirish

// environment variables sozlandi
export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {}
