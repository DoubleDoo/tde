import { PrimaryGeneratedColumn, Entity, Column, Generated } from 'typeorm';
import { IsBoolean, IsDecimal, IsIn, IsInt, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Base,CreateBaseDto } from '../entity/base.entity';

@Entity()
export class Storage extends Base {
  @ApiProperty({
    example: "450 000",
    description: 'Item price'
  })
  @Column({
    type: "text",
    nullable: true
  })
  price: number;

  @ApiProperty({
    example: "false",
    description: 'Item include nds'
  })
  @Column({
    type: "text",
    nullable: true
  })
  nds: boolean;

  @ApiProperty({
    example: 1,
    description: 'Item count'
  })
  @Column({
    type: "text",
    nullable: true
  })
  count: number;

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


export class CreateStorageDto extends CreateBaseDto{

  @ApiProperty({
    example: "450 000",
    description: 'Item price'
  })
  @IsDecimal()
  public price: number ;

  @ApiProperty({
    example: "false",
    description: 'Item include nds'
  })
  @IsBoolean()
  public nds: boolean;

  @ApiProperty({
    example: 1,
    description: 'Item count'
  })
  @IsInt()
  public count: number;

  @ApiProperty({
    example: '3a4c019f-55ba-412e-a19f-d85f97d98fbf',
    description: 'Files UUID'
  })
  @IsUUID()
  public files: string;

  @ApiProperty({
    example: '3a4c019f-55ba-412e-a19f-d85f97d98fbf',
    description: 'Images UUID'
  })
  @IsUUID()
  public images: string;
}
