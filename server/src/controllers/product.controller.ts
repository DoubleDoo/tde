import { Body, Controller, Get, Inject, Param, ParseIntPipe, ParseUUIDPipe, Post, Put,Delete, HttpCode, HttpException } from '@nestjs/common';
import { Product,CreateProductDto } from '../entity/product.entity';
import { ProductService } from '../services/product.service';

@Controller('product')
export class ProductController {
  @Inject(ProductService)
  private readonly service: ProductService;

  @Get(':id')
  @HttpCode(200)
  public async find(@Param('id') id: string): Promise<Product>{
    return await this.service.find(id);
  }

  @Put(':id')
  @HttpCode(200)
  public async put(@Param('id') id: string, @Body() body: CreateProductDto): Promise<Product>{
    return await this.service.put(id,body);
  }

  @Get()
  @HttpCode(200)
  public async get(): Promise<Product[]> {
    return await this.service.get();
  }

  @Post()
  @HttpCode(201)
  public async post(@Body() body: CreateProductDto): Promise<Product> {
    return await this.service.post(body);
  }

  @Delete(':id')
  @HttpCode(204)
  public async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}