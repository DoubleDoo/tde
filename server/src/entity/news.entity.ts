import { PrimaryGeneratedColumn, Entity, Column, Generated, OneToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Base,CreateBaseDto } from '../entity/base.entity';
import { Linked,CreateLinkedDto} from './linked.entity';

@Entity()
export class News extends Base{

  @ApiProperty({
    example: '2021-04-14',
    description: 'Date of publication'
  })
  @Column({
    type: "date",
    nullable: false
  })
  date: string;

  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'File UUID'
  })
  @OneToOne( 
    () => Linked,
    {
      cascade: true,
    }
  )
  @JoinColumn()
  linked: Linked;

}

export class CreateNewsDto extends CreateBaseDto{
  @ApiProperty({
    example: '11.04.2022',
    description: 'Date of publication'
  })
  @IsString()
  @IsNotEmpty()
  public date: string;

  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'Image UUID'
  })
  @IsUUID()
  @IsNotEmpty()
  public linked: CreateLinkedDto;

}
