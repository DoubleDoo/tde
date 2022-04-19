import { Body, Controller, Get, Inject, Param, ParseIntPipe, ParseUUIDPipe, Post, Put, Delete, HttpCode, HttpException, ParseBoolPipe } from '@nestjs/common';
import { File, CreateFileDto } from '../entity/file.entity';
import { FileService } from '../services/file.service';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

import { Response } from '@nestjs/common';
import {
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  // ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('file')
@Controller('file')
export class FileController {
  @Inject(FileService)
  private readonly service: FileService;

  @Get('/:uuid/:download')
  @ApiOperation({ summary: 'Get product by id' })
  @ApiResponse({ status: 403, description: 'Нет доступа' })
  @ApiResponse({ status: 400, description: 'Ошибка запроса' })
  @HttpCode(200)
  public async find(@Param('uuid', new ParseUUIDPipe()) id: string, @Param('download', new ParseBoolPipe()) download: boolean,   @Response({ passthrough: true }) res) {
    if (download){
      return await this.service.findfile(id, res);
    }
    return await this.service.find(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get list of all products' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(200)
  public async get(): Promise<File[]> {
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

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './../data/files',
      filename: function (req, file, cb) {
        console.log(file.originalname.split('\.'))
        cb(null, uuidv4() + "." + file.originalname.split('\.')[1])
      }
    }),
    fileFilter: function (req, file, callback) {
      var ext = file.originalname.split('\.')
      if (ext[1] !== 'pdf') {
        return callback(new Error('Only files (pdf) are allowed'), false)
      }
      callback(null, true)
    },

  }))
  public async post(@Body() body: CreateFileDto, @UploadedFile() file: Express.Multer.File) {
    return await this.service.post(body, file);
  }
}



