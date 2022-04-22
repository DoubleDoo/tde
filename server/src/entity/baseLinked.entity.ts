import { PrimaryGeneratedColumn, Entity, Column, Generated} from 'typeorm';
import { IsNotEmpty, IsString} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Linked,CreateLinkedDto} from './linked.entity';

@Entity()
export class BaseLinked extends Linked {
  @ApiProperty({
    example: "Заголовок",
    description: 'Title'
  })
  @Column({
    type: "text",
    nullable: false
  })
  title: string;

  @ApiProperty({
    example: 'Содержимое, информация',
    description: 'Content'
  })
  @Column({
    type: "text",
    nullable: false
  })
  content: string;
}

export class CreateBaseLinkedDto extends CreateLinkedDto{
  @ApiProperty({
    example: "Заголовок",
    description: 'Title'
  })
  @IsString()
  @IsNotEmpty()
  public title: string;


  @ApiProperty({
    example: 'Содержимое, информация',
    description: 'Content'
  })
  @IsString()
  @IsNotEmpty()
  public content: string;
}
