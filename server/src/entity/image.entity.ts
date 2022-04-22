import { PrimaryGeneratedColumn, Entity, Column, Generated,PrimaryColumn,ManyToOne } from 'typeorm';
import { IsNotEmpty, IsString,IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Linked,CreateLinkedDto} from '../entity/linked.entity';

@Entity()
export class Image {
  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'UUID'
  })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty({
    example: "test.pdf",
    description: 'File name'
  })
  @Column({
    type: "text",
    nullable: false
  })
  name: string;

  @ManyToOne( 
    () => Linked, 
    obj => obj.image,
    {
      onDelete:"CASCADE",
      onUpdate:"CASCADE"
    }
    )
  object: Linked;
}

export class CreateImageDto {
  @ApiProperty({
    example: "test.pdf",
    description: 'File name'
  })
  @IsString()
  @IsNotEmpty()
  public name: string;
}
 