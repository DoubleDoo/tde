import { v4 as uuidv4 } from 'uuid';
import { Entity, Column } from 'typeorm';


@Entity()
export class Article {
  @Column()
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  date: Date;

  @Column({ default: null })
  img: string;

  // constructor (title: string, content: string, date: Date, img?: string) {
  //   this.id = uuidv4();
  //   this.title = title;
  //   this.content = content;
  //   this.date = date;
  //   this.img = img;
  // }
}


