
import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

// README faylini yangilash
@Entity("admins")
export class Admin {
  @PrimaryGeneratedColumn()
// image optimization qo'shildi
  id: number;


  @Column()
  userId: number;

  @Column('json')
  permissions: string[];

  @ManyToOne(() => User, user => user.admins)
  @JoinColumn({ name: 'userId' })
  user: User;
}
