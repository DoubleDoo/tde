import { PrimaryGeneratedColumn, Entity, Column, Generated,OneToOne ,JoinColumn, OneToMany} from 'typeorm';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { File,CreateFileDto} from './file.entity';
import { Image,CreateImageDto} from './image.entity';

@Entity()
export class Linked {
  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'UUID'
  })
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;
  
  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'File UUID'
  })
  @OneToMany( 
    () => Image, obj => obj.object,
    {
      cascade: true,
    }
  )
  @JoinColumn()
  image: Image[];

  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'File UUID'
  })
  @OneToMany( 
    () => File, obj => obj.object,
    {
      cascade: true,
    }
  )
  @JoinColumn()
  file: File[];
  
}
 
export class CreateLinkedDto {  
  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'Image UUID'
  })
  @IsUUID()
  @IsNotEmpty()
  public image: CreateImageDto[];


  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'File UUID'
  })
  @IsUUID()
  @IsNotEmpty()
  public file: CreateFileDto[];
}
