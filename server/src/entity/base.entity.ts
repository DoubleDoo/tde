import { 
  PrimaryGeneratedColumn, 
  Entity, 
  Column, 
  Generated
} from 'typeorm';
import { 
  IsNotEmpty, 
  IsString
} from 'class-validator';
import { 
  ApiProperty 
} from '@nestjs/swagger';

@Entity()
export class Base {
  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'UUID'
  })
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;

  @ApiProperty({
    example: "Заголовок",
    description: 'Title'
  })
  @Column({
    type: "text",
    nullable: false
  })
  title: string;

  @ApiProperty({
    example: 'Содержимое, информация',
    description: 'Content'
  })
  @Column({
    type: "text",
    nullable: false
  })
  content: string;
}

export class CreateBaseDto {
  @ApiProperty({
    example: "Заголовок",
    description: 'Title'
  })
  @IsString()
  @IsNotEmpty()
  public title: string;


  @ApiProperty({
    example: 'Содержимое, информация',
    description: 'Content'
  })
  @IsString()
  @IsNotEmpty()
  public content: string;
}
