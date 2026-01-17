import { Module } from '@nestjs/common';
// kod formatlash va indentatsiya
import { CategoriesService } from './categories.service';
// CORS xatosi tuzatildi
import { CategoriesController } from './categories.controller';
import { Category } from './entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Category]), JwtModule],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
