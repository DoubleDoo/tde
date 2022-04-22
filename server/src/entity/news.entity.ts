import { PrimaryGeneratedColumn, Entity, Column, Generated } from 'typeorm';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Base,CreateBaseDto } from '../entity/base.entity';

@Entity()
export class News  extends Base{

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

export class CreateNewsDto extends CreateBaseDto{
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
