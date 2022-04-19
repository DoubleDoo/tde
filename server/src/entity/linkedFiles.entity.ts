import { PrimaryGeneratedColumn, Entity, Column, Generated,OneToOne ,JoinColumn} from 'typeorm';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { File,CreateFileDto} from '../entity/file.entity';

@Entity()
export class LinkedFiles {
  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'UUID'
  })
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;
  
  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'Object conected to files UUID'
  })
  @Column({
    type: "uuid",
    nullable: false
  })
  object: string;

  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'File UUID'
  })
  @OneToOne( 
    () => File,
    {
      cascade: true,
    }
  )
  @JoinColumn()
  file: File;
}

export class CreateLinkedFilesDto {
  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'Object conected to files UUID'
  })
  @IsUUID()
  @IsNotEmpty()
  public object: string;


  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'File UUID'
  })
  @IsUUID()
  @IsNotEmpty()
  public file: CreateFileDto;
}
