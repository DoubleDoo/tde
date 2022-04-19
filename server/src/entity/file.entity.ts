import { PrimaryGeneratedColumn, Entity, Column, Generated,PrimaryColumn} from 'typeorm';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class File {
  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'UUID'
  })
  @PrimaryColumn("uuid")
  id: string;

  @ApiProperty({
    example: "test.pdf",
    description: 'File name'
  })
  @Column({
    type: "text",
    nullable: false
  })
  name: string;
}

export class CreateFileDto {
  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'UUID'
  })
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    example: "test.pdf",
    description: 'File name'
  })
  @IsString()
  @IsNotEmpty()
  public name: string;
}
