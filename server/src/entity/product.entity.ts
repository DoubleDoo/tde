import { PrimaryGeneratedColumn,Entity, Column,Generated } from 'typeorm';

import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  @IsNotEmpty()
  public content: string;
}


@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;

  @Column(
    { 
      type: "text",
      nullable: false 
    })
  title: string;

  @Column(
    { 
      type: "text",
      nullable: false
    })
  content: string;
}

// int, int2, int4, int8, smallint, integer, bigint, decimal, numeric, real, float, float4, 
// float8, double precision, money, character varying, varchar, character, char, text, citext, 
// hstore, bytea, bit, varbit, bit varying, timetz, timestamptz, timestamp, timestamp without time zone, 
// timestamp with time zone, date, time, time without time zone, time with time zone, interval, bool, 
// boolean, enum, point, line, lseg, box, path, polygon, circle, cidr, inet, macaddr, tsvector, tsquery, 
// uuid, xml, json, jsonb, int4range, int8range, numrange, tsrange, tstzrange, daterange, geometry, geography, 
// cube, ltree