import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
// bundle size optimallashtirildi
// API endpoint testlari qo'shildi
import { Order } from './entities/order.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), JwtModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
