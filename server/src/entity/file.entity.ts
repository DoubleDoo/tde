import { PrimaryGeneratedColumn, Entity, Column, Generated,PrimaryColumn,OneToOne,JoinColumn,ManyToOne} from 'typeorm';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Linked,CreateLinkedDto} from '../entity/linked.entity';

@Entity()
export class File {
  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'UUID'
  })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty({
    example: "file.pdf",
    description: 'File name with extension (pdf,xls,xlsx,doc,docx)'
  })
  @Column({
    type: "text",
    nullable: false
  })
  name: string;

  @ManyToOne( 
    () => Linked, 
    obj => obj.file,
    {
      onDelete:"CASCADE",
      onUpdate:"CASCADE"
    }
    )
  object: Linked;
}

export class CreateFileDto {
  @ApiProperty({
    example: "file.pdf",
    description: 'File name with extension (pdf,xls,xlsx,doc,docx)'
  })
  @IsString()
  @IsNotEmpty()
  public name: string;
}
 