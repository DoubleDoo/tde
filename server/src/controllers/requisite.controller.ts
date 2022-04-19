import { Body, Controller, Get, Inject, Param, ParseIntPipe, ParseUUIDPipe, Post, Put,Delete, HttpCode, HttpException } from '@nestjs/common';
import { Requisite,CreateRequisiteDto } from '../entity/requisite.entity';
import { RequisiteService } from '../services/requisite.service';
import {
  // ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('requisite')
@Controller('requisite')
export class RequisiteController {
  @Inject(RequisiteService)
  private readonly service: RequisiteService;

  @Get(':uuid')
  @ApiOperation({ summary: 'Get product by id' })
  @ApiResponse({ status: 403, description: 'Нет доступа' })
  @ApiResponse({ status: 400, description: 'Ошибка запроса' })
  @HttpCode(200)
  public async find(@Param('uuid', new ParseUUIDPipe()) id: string): Promise<Requisite>{
    return await this.service.find(id);
  }

  @Put(':uuid')
  @ApiOperation({ summary: 'Change product by id' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(200)
  public async put(@Param('uuid', new ParseUUIDPipe()) id: string, @Body() body: CreateRequisiteDto): Promise<Requisite>{
    return await this.service.put(id,body);
  }

  @Get()
  @ApiOperation({ summary: 'Get list of all products' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(200)
  public async get(): Promise<Requisite[]> {
    return await this.service.get();
  }

  @Post()
  @ApiOperation({ summary: 'Create product' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(201)
  public async post(@Body() body: CreateRequisiteDto): Promise<Requisite> {
    return await this.service.post(body);
  }

  @Delete(':uuid')
  @ApiOperation({ summary: 'Delete product' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(204)
  public async delete(@Param('uuid', new ParseUUIDPipe()) id: string) {
    return await this.service.delete(id);
  }
}