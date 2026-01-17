import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewDto } from './create-review.dto';

// admin dashboard yaratildi
// unit testlar qo'shildi
export class UpdateReviewDto extends PartialType(CreateReviewDto) {}
