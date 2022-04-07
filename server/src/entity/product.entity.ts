import { PrimaryGeneratedColumn,Entity, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;
}
