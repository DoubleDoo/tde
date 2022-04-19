import { PrimaryGeneratedColumn, Entity, Column, Generated } from 'typeorm';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class News {
  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'UUID'
  })
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;

  @ApiProperty({
    example: "Начата разработка нового сайта",
    description: 'News title'
  })
  @Column({
    type: "text",
    nullable: false
  })
  title: string;

  @ApiProperty({
    example: 'Начата разработка нового сайта для нашей компании',
    description: 'News description'
  })
  @Column({
    type: "text",
    nullable: false
  })
  content: string;

  @ApiProperty({
    example: '11.04.2022',
    description: 'Date of publication'
  })
  @Column({
    type: "date",
    nullable: false
  })
  date: string;

  @ApiProperty({
    example: '3a4c019f-55ba-412e-a19f-d85f97d98fbf',
    description: 'Files UUID'
  })
  @Column({
    type: "uuid",
    nullable: true
  })
  files: string;

  @ApiProperty({
    example: '3a4c019f-55ba-412e-a19f-d85f97d98fbf',
    description: 'Images UUID'
  })
  @Column({
    type: "uuid",
    nullable: true
  })
  images: string;
}

export class CreateNewsDto {
  @ApiProperty({
    example: "Начата разработка нового сайта",
    description: 'News title'
  })
  @IsString()
  @IsNotEmpty()
  public title: string;

  @ApiProperty({
    example: 'Начата разработка нового сайта для нашей компании',
    description: 'News description'
  })
  @IsString()
  @IsNotEmpty()
  public content: string;

  @ApiProperty({
    example: '11.04.2022',
    description: 'Date of publication'
  })
  @IsString()
  @IsNotEmpty()
  public date: string;

  @ApiProperty({
    example: '3a4c019f-55ba-412e-a19f-d85f97d98fbf',
    description: 'News related files UUID'
  })
  @IsUUID()
  public files: string;

  @ApiProperty({
    example: '3a4c019f-55ba-412e-a19f-d85f97d98fbf',
    description: 'News related images UUID'
  })
  @IsUUID()
  public images: string;
}
