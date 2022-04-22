import { Body, Controller, Get, Inject, Param, ParseIntPipe,ParseBoolPipe, ParseUUIDPipe, Post, Put,Delete, HttpCode, HttpException } from '@nestjs/common';
import { Image,CreateImageDto } from '../entity/image.entity';
import { ImageService } from '../services/image.service';

import { File, CreateFileDto } from '../entity/file.entity';
import { FileService } from '../services/file.service';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from '@nestjs/common';
import {
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  // ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('image')
@Controller('image')
export class ImageController {
  @Inject(ImageService)
  private readonly service: ImageService;

  
  @Get('/:uuid/:download')
  @ApiOperation({ summary: 'Get product by id' })
  @ApiResponse({ status: 403, description: 'Нет доступа' })
  @ApiResponse({ status: 400, description: 'Ошибка запроса' })
  @HttpCode(200)
  public async find(@Param('uuid', new ParseUUIDPipe()) id: string, @Param('download', new ParseBoolPipe()) download: boolean,   @Response({ passthrough: true }) res) {
    if (download){
      return await this.service.findimage(id, res);
    }
    return await this.service.find(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get list of all products' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(200)
  public async get(): Promise<Image[]> {
    return await this.service.get();
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



