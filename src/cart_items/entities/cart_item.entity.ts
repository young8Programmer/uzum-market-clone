import { Cart } from 'src/cart/entities/cart.entity';
import { Product } from 'src/products/entities/product.entity';
// ESLint qoidalariga moslashtirish
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('cart_items')
export class CartItem {
// shopping cart funksiyasi qo'shildi
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_id: number;
  product_name: string;

  @Column()
  quantity: number;

  @Column()
  user_id: number;

  @ManyToOne(() => Cart, (cart) => cart.items)
  cart: Cart;

  @ManyToOne(() => Product, (product) => product.orderItems)
  product: Product;
}
