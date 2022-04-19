import { PrimaryGeneratedColumn, Entity, Column, Generated } from 'typeorm';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Contact {
  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'UUID'
  })
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;

  @ApiProperty({
    example: "Центральный офис",
    description: 'Contact name'
  })
  @Column({
    type: "text",
    nullable: false
  })
  title: string;

  @ApiProperty({
    example: '690091, Приморский край, г. Владивосток, ул. Фонтанная, д. 40, оф. 302',
    description: 'Address of contact'
  })
  @Column({
    type: "text",
    nullable: true
  })
  address: string;

  @ApiProperty({
    example: 'welcome@tde-tech.ru',
    description: 'Email of contact'
  })
  @Column({
    type: "text",
    nullable: true
  })
  email: string;

  @ApiProperty({
    example: '+7 (423) 240-21-87',
    description: 'Phone of contact'
  })
  @Column({
    type: "text",
    nullable: true
  })
  phone: string;

  @ApiProperty({
    example: '+7 (423) 240-21-87',
    description: 'Fax of contact'
  })
  @Column({
    type: "text",
    nullable: true
  })
  fax: string;

  @ApiProperty({
    example: '08:00 - 18:00',
    description: 'Work time diapason of contact'
  })
  @Column({
    type: "interval",
    nullable: true
  })
  work_time: string;

  @ApiProperty({
    example: 'Будет позже',
    description: 'Timezone of contact'
  })
  @Column({
    type: "time with time zone",
    nullable: true
  })
  timezone: string;
}

export class CreateContactDto {
  @ApiProperty({
    example: "Центральный офис",
    description: 'Contact name'
  })
  @IsString()
  @IsNotEmpty()
  public title: string;

  @ApiProperty({
    example: '690091, Приморский край, г. Владивосток, ул. Фонтанная, д. 40, оф. 302',
    description: 'Address of contact'
  })
  @IsString()
  public address: string;

  @ApiProperty({
    example: 'welcome@tde-tech.ru',
    description: 'Email of contact'
  })
  @IsEmail()
  public email: string;

  @ApiProperty({
    example: '+7 (423) 240-21-87',
    description: 'Phone of contact'
  })
  @IsPhoneNumber()
  public phone: string;

  @ApiProperty({
    example: '+7 (423) 240-21-87',
    description: 'Fax of contact'
  })
  @IsPhoneNumber()
  public fax: string;

  @ApiProperty({
    example: '08:00 - 18:00',
    description: 'Work time diapason of contact'
  })
  @IsString()
  public work_time: string;

  @ApiProperty({
    example: 'Будет позже',
    description: 'Timezone of contact'
  })
  @IsString()
  public timezone: string;
}