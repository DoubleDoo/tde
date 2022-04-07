import { Body, Controller, Get, Inject, Param, ParseIntPipe, ParseUUIDPipe, Post } from '@nestjs/common';
import { Product } from '../entity/product.entity';
import { ProductService } from '../services/product.service';

@Controller('product')
export class ProductController {
  @Inject(ProductService)
  private readonly service: ProductService;

  @Get(':id')
  public async getById(id: string){
    return await this.service.getById(id);
  }

  @Get()
  public async getAll() {
    return await this.service.getAll();
  }
}