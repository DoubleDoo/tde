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
export class User {
  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'UUID'
  })
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;

  @ApiProperty({
    example: "dubinich",
    description: 'Login'
  })
  @Column({
    type: "text",
    nullable: false
  })
  username: string;

  @ApiProperty({
    example: 'password',
    description: 'Password'
  })
  @Column({
    type: "text",
    nullable: false
  })
  password: string;
}

export class CreateUserDto {
  @ApiProperty({
    example: "dubinich",
    description: 'Login'
  })
  @IsString()
  @IsNotEmpty()
  public username: string;

  @ApiProperty({
    example: 'password',
    description: 'Password'
  })
  @IsString()
  @IsNotEmpty()
  public password: string;
}
