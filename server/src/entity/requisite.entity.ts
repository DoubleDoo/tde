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
export class Requisite {
  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'UUID'
  })
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;

  @ApiProperty({
    example: "ООО «ТДЭ»",
    description: 'short_name'
  })
  @Column({
    type: "text",
    nullable: false
  })
  short_name: string;

  @ApiProperty({
    example: "Общество с ограниченной ответственностью «ТДЭ»",
    description: 'long_name'
  })
  @Column({
    type: "text",
    nullable: false
  })
  long_name: string;

  @ApiProperty({
    example: "690091, Приморский край, г. Владивосток, ул. Фонтанная, д. 40, оф. 302",
    description: 'legal_address'
  })
  @Column({
    type: "text",
    nullable: false
  })
  legal_address: string;

  @ApiProperty({
    example: "2536302342",
    description: 'inn'
  })
  @Column({
    type: "text",
    nullable: false
  })
  inn: string;

  @ApiProperty({
    example: "253601001",
    description: 'kpp'
  })
  @Column({
    type: "text",
    nullable: false
  })
  kpp: string;

  @ApiProperty({
    example: "1172536012550",
    description: 'ogrn'
  })
  @Column({
    type: "text",
    nullable: false
  })
  ogrn: string;

  @ApiProperty({
    example: "05401364000",
    description: 'okato'
  })
  @Column({
    type: "text",
    nullable: false
  })
  okato: string;

  @ApiProperty({
    example: "27.12 (Производство электрической распределительной и регулирующей аппаратуры)",
    description: 'okved'
  })
  @Column({
    type: "text",
    nullable: false
  })
  okved: string;

  @ApiProperty({
    example: "14302153",
    description: 'okpo'
  })
  @Column({
    type: "text",
    nullable: false
  })
  okpo: string;

  @ApiProperty({
    example: "4210014",
    description: 'okogu'
  })
  @Column({
    type: "text",
    nullable: false
  })
  okogu: string;

  @ApiProperty({
    example: "05701000001",
    description: 'oktmo'
  })
  @Column({
    type: "text",
    nullable: false
  })
  oktmo: string;

  @ApiProperty({
    example: "407 028 107 500 000 038 38",
    description: 'payment_address'
  })
  @Column({
    type: "text",
    nullable: false
  })
  payment_address: string;

  @ApiProperty({
    example: "Дальневосточный банк ПАО «Сбербанк» (г.Хабаровск)",
    description: 'bank'
  })
  @Column({
    type: "text",
    nullable: false
  })
  bank: string;

  @ApiProperty({
    example: "301 018 106 000 000 006 08",
    description: 'correspondence_address'
  })
  @Column({
    type: "text",
    nullable: false
  })
  correspondence_address: string;

  @ApiProperty({
    example: "040813608",
    description: 'bik'
  })
  @Column({
    type: "text",
    nullable: false
  })
  bik: string;

  @ApiProperty({
    example: "Батурин",
    description: 'director_name'
  })
  @Column({
    type: "text",
    nullable: false
  })
  director_name: string;

  @ApiProperty({
    example: "Дмитрий ",
    description: 'director_surname'
  })
  @Column({
    type: "text",
    nullable: false
  })
  director_surname: string;

  @ApiProperty({
    example: "Геннадьевич",
    description: 'director_patronymic'
  })
  @Column({
    type: "text",
    nullable: false
  })
  director_patronymic: string;
}


export class CreateRequisiteDto {
  @ApiProperty({
    example: "ООО «ТДЭ»",
    description: 'short_name'
  })
  @IsString()
  @IsNotEmpty()
  public short_name: string;

  @ApiProperty({
    example: "Общество с ограниченной ответственностью «ТДЭ»",
    description: 'long_name'
  })
  @IsString()
  @IsNotEmpty()
  public long_name: string;

  @ApiProperty({
    example: "690091, Приморский край, г. Владивосток, ул. Фонтанная, д. 40, оф. 302",
    description: 'legal_address'
  })
  @IsString()
  @IsNotEmpty()
  public legal_address: string;

  @ApiProperty({
    example: "2536302342",
    description: 'inn'
  })
  @IsString()
  @IsNotEmpty()
  public inn: string;

  @ApiProperty({
    example: "253601001",
    description: 'kpp'
  })
  @IsString()
  @IsNotEmpty()
  public kpp: string;

  @ApiProperty({
    example: "1172536012550",
    description: 'ogrn'
  })
  @IsString()
  @IsNotEmpty()
  public ogrn: string;

  @ApiProperty({
    example: "05401364000",
    description: 'okato'
  })
  @IsString()
  @IsNotEmpty()
  public okato: string;

  @ApiProperty({
    example: "27.12 (Производство электрической распределительной и регулирующей аппаратуры)",
    description: 'okved'
  })
  @IsString()
  @IsNotEmpty()
  public okved: string;

  @ApiProperty({
    example: "14302153",
    description: 'okpo'
  })
  @IsString()
  @IsNotEmpty()
  public okpo: string;

  @ApiProperty({
    example: "4210014",
    description: 'okogu'
  })
  @IsString()
  @IsNotEmpty()
  public okogu: string;

  @ApiProperty({
    example: "05701000001",
    description: 'oktmo'
  })
  @IsString()
  @IsNotEmpty()
  public oktmo: string;

  @ApiProperty({
    example: "407 028 107 500 000 038 38",
    description: 'payment_address'
  })
  @IsString()
  @IsNotEmpty()
  public payment_address: string;

  @ApiProperty({
    example: "Дальневосточный банк ПАО «Сбербанк» (г.Хабаровск)",
    description: 'bank'
  })
  @IsString()
  @IsNotEmpty()
  public bank: string;

  @ApiProperty({
    example: "301 018 106 000 000 006 08",
    description: 'correspondence_address'
  })
  @IsString()
  @IsNotEmpty()
  public correspondence_address: string;

  @ApiProperty({
    example: "040813608",
    description: 'bik'
  })
  @IsString()
  @IsNotEmpty()
  public bik: string;

  @ApiProperty({
    example: "Батурин",
    description: 'director_name'
  })
  @IsString()
  @IsNotEmpty()
  public director_name: string;

  @ApiProperty({
    example: "Дмитрий ",
    description: 'director_surname'
  })
  @IsString()
  @IsNotEmpty()
  public director_surname: string;

  @ApiProperty({
    example: "Геннадьевич",
    description: 'director_patronymic'
  })
  @IsString()
  @IsNotEmpty()
  public director_patronymic: string;
}
