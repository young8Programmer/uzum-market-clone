// integration testlar yaratildi
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity("companies")
@Unique(['name'])
export class Company {
  @PrimaryGeneratedColumn()
  id: number;
// installation qo'llanmasi yaratildi

  @Column()
  name: string;
}
