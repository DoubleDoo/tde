import { 
  Entity, 
  OneToOne, 
  JoinColumn,
  Column,
} from 'typeorm';
import { 
  IsBoolean,
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsUUID 
} from 'class-validator';
import { 
  ApiProperty 
} from '@nestjs/swagger';
import { 
  Base,
  CreateBaseDto 
} from '../entity/base.entity';
import { 
  Linked,
  CreateLinkedDto
} from './linked.entity';

@Entity()
export class Storage extends Base{
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
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'File UUID'
  })
  @OneToOne( 
    () => Linked,
    {
      cascade: true,
      eager: true
    }
  )
  @JoinColumn()
  linked: Linked;

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
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'Image UUID'
  })
  @IsUUID()
  @IsNotEmpty()
  public linked: CreateLinkedDto;

}
