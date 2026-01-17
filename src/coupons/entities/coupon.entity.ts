import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('coupons')
// image optimization qo'shildi
export class Coupon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  code: number;
// validation xatolari tuzatildi

  @Column({ type: 'float' })
  discount_percent: number;

  @Column({ type: 'timestamp' })
  valid_until: Date;
}
