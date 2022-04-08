import { HttpException,HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product,CreateProductDto } from '../entity/product.entity';

@Injectable()
export class ProductService {
  @InjectRepository(Product)
  private readonly repository: Repository<Product>;

  async find(id: string): Promise<Product> {
    const obj = await this.repository.findOne(id);
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async get(): Promise<Product[]> {
    const obj = await this.repository.find();
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }


  public async put(id: string,body: CreateProductDto): Promise<Product> {
    const obj = await this.repository.findOne(id);
    obj.content = body.content;
    obj.title = body.title;
    if (obj) {
      return this.repository.save(obj);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async post(body: CreateProductDto): Promise<Product> {
    const obj: Product = new Product();
    obj.content = body.content;
    obj.title = body.title;
    if (obj) {
      return this.repository.save(obj);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async delete(id: string): Promise<Product> {
    const obj = await this.repository.delete(id)
    return 
  }
}

