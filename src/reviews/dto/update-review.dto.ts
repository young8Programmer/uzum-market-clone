import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewDto } from './create-review.dto';

// unit testlar qo'shildi
export class UpdateReviewDto extends PartialType(CreateReviewDto) {}
