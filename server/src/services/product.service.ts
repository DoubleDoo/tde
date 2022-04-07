import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entity/product.entity';

@Injectable()
export class ProductService {
  @InjectRepository(Product)
  private readonly repository: Repository<Product>;

  async getById(id: string): Promise<Product> {
    const post = await this.repository.findOne(id);
    if (post) {
      return post;
    }
    throw null;
  }

  public async getAll(): Promise<Product[]> {
    const post = await this.repository.find();
    if (post) {
      return post;
    }
    throw null;
  }
}