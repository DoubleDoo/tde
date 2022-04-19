import { PrimaryGeneratedColumn, Entity, Column, Generated } from 'typeorm';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class TestProtocol {
  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'UUID'
  })
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;

  @ApiProperty({
    example: "Протокол испытаний № 13-22/02",
    description: 'TestProtocol name'
  })
  @Column({
    type: "text",
    nullable: false
  })
  title: string;

  @ApiProperty({
    example: 'Протокол испытаний зданий и помещений цельноперевозимых, модульного типа, сборно-разборных, выпускаемых по ТУ 5363-002-61085812-2021',
    description: 'TestProtocol description'
  })
  @Column({
    type: "text",
    nullable: false
  })
  content: string;

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

export class CreateTestProtocolDto {
  @ApiProperty({
    example: "Протокол испытаний № 13-22/02",
    description: 'TestProtocol name'
  })
  @IsString()
  @IsNotEmpty()
  public title: string;

  @ApiProperty({
    example: 'Протокол испытаний зданий и помещений цельноперевозимых, модульного типа, сборно-разборных, выпускаемых по ТУ 5363-002-61085812-2021',
    description: 'TestProtocol description'
  })
  @IsString()
  @IsNotEmpty()
  public content: string;

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
