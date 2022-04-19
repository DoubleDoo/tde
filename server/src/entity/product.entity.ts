import { PrimaryGeneratedColumn, Entity, Column, Generated } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Product {
  @ApiProperty({
    example: "3a4c019f-55ba-412e-a19f-d85f97d98fbf",
    description: 'UUID'
  })
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;

  @ApiProperty({
    example: "КТП",
    description: 'Product name'
  })
  @Column({
    type: "text",
    nullable: false
  })
  title: string;

  @ApiProperty({
    example: 'Комплектная трансформаторная подстанция',
    description: 'Product description'
  })
  @Column({
    type: "text",
    nullable: false
  })
  content: string;
}

export class CreateProductDto {
  @ApiProperty({
    example: "КТП",
    description: 'Product name'
  })
  @IsString()
  @IsNotEmpty()
  public title: string;

  @ApiProperty({
    example: 'Комплектная трансформаторная подстанция',
    description: 'Product description'
  })
  @IsString()
  @IsNotEmpty()
  public content: string;
}


// int, int2, int4, int8, smallint, integer, bigint, decimal, numeric, real, float, float4,
// float8, double precision, money, character varying, varchar, character, char, text, citext,
// hstore, bytea, bit, varbit, bit varying, timetz, timestamptz, timestamp, timestamp without time zone,
// timestamp with time zone, date, time, time without time zone, time with time zone, interval, bool,
// boolean, enum, point, line, lseg, box, path, polygon, circle, cidr, inet, macaddr, tsvector, tsquery,
// uuid, xml, json, jsonb, int4range, int8range, numrange, tsrange, tstzrange, daterange, geometry, geography,
// cube, ltree