import { PrimaryGeneratedColumn, Entity, Column, Generated } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Image {
  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'UUID'
  })
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;

  @ApiProperty({
    example: "test.jpg",
    description: 'Image name'
  })
  @Column({
    type: "text",
    nullable: false
  })
  name: string;
}

export class CreateImageDto {
  @ApiProperty({
    example: "test.jpg",
    description: 'Image name'
  })
  @IsString()
  @IsNotEmpty()
  public name: string;
}
