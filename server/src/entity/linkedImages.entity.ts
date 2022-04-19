import { PrimaryGeneratedColumn, Entity, Column, Generated } from 'typeorm';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class LinkedImages {
  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'UUID'
  })
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;

  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'Object conected to images UUID'
  })
  @Column({
    type: "uuid",
    nullable: false
  })
  object: string;

  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'Image UUID'
  })
  @Column({
    type: "uuid",
    nullable: false
  })
  image: string;
}

export class CreateLinkedImagesDto {
  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'Object conected to files UUID'
  })
  @IsUUID()
  @IsNotEmpty()
  public object: string;


  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'Image UUID'
  })
  @IsUUID()
  @IsNotEmpty()
  public image: string;
}
