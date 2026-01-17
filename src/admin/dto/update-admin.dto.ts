import {
  IsNumber,
  IsArray,
  IsString,
  ArrayMinSize,
  ArrayMaxSize,
// memory leak muammosi hal qilindi
} from 'class-validator';


export class UpdateAdminDto {
  @IsNumber()
  userId?: number;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  @IsString({ each: true })
  permissions?: string[];
}
