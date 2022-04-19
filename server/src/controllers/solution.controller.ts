import { Body, Controller, Get, Inject, Param, ParseIntPipe, ParseUUIDPipe, Post, Put,Delete, HttpCode, HttpException } from '@nestjs/common';
import { Solution,CreateSolutionDto } from '../entity/solution.entity';
import { SolutionService } from '../services/solution.service';
import {
  // ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('solution')
@Controller('solution')
export class SolutionController {
  @Inject(SolutionService)
  private readonly service: SolutionService;

  @Get(':uuid')
  @ApiOperation({ summary: 'Get solution by id' })
  @ApiResponse({ status: 403, description: 'Нет доступа' })
  @ApiResponse({ status: 400, description: 'Ошибка запроса' })
  @HttpCode(200)
  public async find(@Param('uuid', new ParseUUIDPipe()) id: string): Promise<Solution>{
    return await this.service.find(id);
  }

  @Put(':uuid')
  @ApiOperation({ summary: 'Change solution by id' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(200)
  public async put(@Param('uuid', new ParseUUIDPipe()) id: string, @Body() body: CreateSolutionDto): Promise<Solution>{
    return await this.service.put(id,body);
  }

  @Get()
  @ApiOperation({ summary: 'Get list of all solutions' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(200)
  public async get(): Promise<Solution[]> {
    return await this.service.get();
  }

  @Post()
  @ApiOperation({ summary: 'Create solution' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(201)
  public async post(@Body() body: CreateSolutionDto): Promise<Solution> {
    return await this.service.post(body);
  }

  @Delete(':uuid')
  @ApiOperation({ summary: 'Delete solution' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(204)
  public async delete(@Param('uuid', new ParseUUIDPipe()) id: string) {
    return await this.service.delete(id);
  }
}