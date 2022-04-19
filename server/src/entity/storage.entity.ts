import { PrimaryGeneratedColumn, Entity, Column, Generated } from 'typeorm';
import { IsBoolean, IsDecimal, IsIn, IsInt, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Storage {
  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'UUID'
  })
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;

  @ApiProperty({
    example: "Ретом - ВЧ Магазин затуханий ВЧА-75",
    description: 'Item title'
  })
  @Column({
    type: "text",
    nullable: false
  })
  title: string;

  @ApiProperty({
    example: "Магазин затуханий ВЧА-75М повышает производительность труда при наладке и эксплуатации ВЧ устройств РЗ, ПА и ВЧ тракта. ВЧА-75М представляет собой набор делителей напряжения и образует аттенюатор с переключаемым коэффициентом ослабления. Характеристическое входное и выходное сопротивление магазина составляет 75 Ом. ВЧА-75М предназначен для проверки двух полукомплектов ВЧ аппаратуры в условиях лаборатории через искусственную линию, определения запаса по перекрываемому затуханию действующего канала, определения затухания симметричного четырехполюсника с характеристическим сопротивлением 75 Ом методом сравнения.",
    description: 'Item description'
  })
  @Column({
    type: "text",
    nullable: false
  })
  description: string;

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


export class CreateStorageDto {
  @ApiProperty({
    example: "Ретом - ВЧ Магазин затуханий ВЧА-75",
    description: 'Item title'
  })
  @IsString()
  @IsNotEmpty()
  public title: string;

  @ApiProperty({
    example: "Магазин затуханий ВЧА-75М повышает производительность труда при наладке и эксплуатации ВЧ устройств РЗ, ПА и ВЧ тракта. ВЧА-75М представляет собой набор делителей напряжения и образует аттенюатор с переключаемым коэффициентом ослабления. Характеристическое входное и выходное сопротивление магазина составляет 75 Ом. ВЧА-75М предназначен для проверки двух полукомплектов ВЧ аппаратуры в условиях лаборатории через искусственную линию, определения запаса по перекрываемому затуханию действующего канала, определения затухания симметричного четырехполюсника с характеристическим сопротивлением 75 Ом методом сравнения.",
    description: 'Item description'
  })
  @IsString()
  @IsNotEmpty()
  public description: string;

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
