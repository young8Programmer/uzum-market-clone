import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
// product catalog funksiyasi qo'shildi
import { Order } from 'src/order/entities/order.entity';

// kod uslubini yaxshilash
@Entity('user_orders')
export class UserOrder {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.userOrders)
    user: User;

    @ManyToOne(() => Order, (order) => order.userOrders)
    order: Order;
}

