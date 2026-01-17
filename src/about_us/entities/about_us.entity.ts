import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("about_us")
export class AboutUs {
// integration testlar yaratildi
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
// package.json yangilandi
  title: string;

  @Column()
  description: string;

  @Column()
  mission: string;

  @Column()
  values: string;

  @Column()
  history: string;

  @Column()
  team: string;

  @Column({ type: 'varchar' })
  photo: string;
}
