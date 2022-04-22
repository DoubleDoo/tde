import { Body, Controller, Get, Inject, Param, ParseIntPipe, ParseUUIDPipe, Post, Put,Delete, HttpCode, HttpException } from '@nestjs/common';
import { Linked,CreateLinkedDto } from '../entity/linked.entity';
import { LinkedService } from '../services/linked.service';
import { ParseBoolPipe } from '@nestjs/common';
import { File, CreateFileDto } from '../entity/file.entity';
import { FileService } from '../services/file.service';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

import { Response } from '@nestjs/common';
import {
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor,FileFieldsInterceptor } from '@nestjs/platform-express';
import {
  // ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiConsumes,
  ApiBody
} from '@nestjs/swagger';

@ApiTags('linked')
@Controller('linked')
export class LinkedController {
  @Inject(LinkedService)
  private readonly service: LinkedService;

  @Get(':uuid')
  @ApiOperation({ summary: 'Get news by id' })
  @ApiResponse({ status: 403, description: 'Нет доступа' })
  @ApiResponse({ status: 400, description: 'Ошибка запроса' })
  @HttpCode(200)
  public async find(@Param('uuid', new ParseUUIDPipe()) id: string): Promise<Linked>{
    return await this.service.find(id);
  }


  @Get()
  @ApiOperation({ summary: 'Get list of all news' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(200)
  public async get(): Promise<Linked[]> {
    return await this.service.get();
  }
 
  @Put(':uuid')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {

        files: {
          type: 'array',
          items: {
              type: 'string',
              format: 'binary',
          },
        },
        images: {
          type: 'array',
          items: {
              type: 'string',
              format: 'binary',
          },
        },
      },
    },
  })
  @UseInterceptors(FileFieldsInterceptor(
    [
      { name: 'files', maxCount: 2 },
      { name: 'images', maxCount: 2 },
    ], {
    storage: diskStorage({
      destination: function (req, obj, cb) {
        console.log(obj.originalname.split('\.'))
        if(obj.originalname.split('\.')[1]=="pdf"){
          cb(null, './../data/files')
        }
        else{
          cb(null, './../data/images')
        }
      },
      filename: function (req, obj, cb) {
        console.log(obj.originalname.split('\.'))
        cb(null, uuidv4() + "." + obj.originalname.split('\.')[1])
      }
    }),
    fileFilter: function (req, obj, callback) {
      var ext = obj.originalname.split('\.')
      // if (ext[1] !== 'pdf') {
      //   return callback(new Error('Only files (pdf) are allowed'), false)
      // }
      callback(null, true)
    },

  }))
  public async put(@Param('uuid', new ParseUUIDPipe())  id: string, @UploadedFiles() obj: {files? : Express.Multer.File[], images? : Express.Multer.File[]}): Promise<Linked> {
    return await this.service.put(id, obj);
  }


  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        files: {
          type: 'array',
          items: {
              type: 'string',
              format: 'binary',
          },
        },
        images: {
          type: 'array',
          items: {
              type: 'string',
              format: 'binary',
          },
        },
      },
    },
  })
  @UseInterceptors(FileFieldsInterceptor(
    [
      { name: 'files', maxCount: 2 },
      { name: 'images', maxCount: 2 },
    ], {
    storage: diskStorage({
      destination: function (req, obj, cb) {
        console.log(obj.originalname.split('\.'))
        if(obj.originalname.split('\.')[1]=="pdf"){
          cb(null, './../data/files')
        }
        else{
          cb(null, './../data/images')
        }
      },
      filename: function (req, obj, cb) {
        console.log(obj.originalname.split('\.'))
        cb(null, uuidv4() + "." + obj.originalname.split('\.')[1])
      }
    }),
    fileFilter: function (req, obj, callback) {
      var ext = obj.originalname.split('\.')
      // if (ext[1] !== 'pdf') {
      //   return callback(new Error('Only files (pdf) are allowed'), false)
      // }
      callback(null, true)
    },

  }))
  public async post(@Body() body: CreateLinkedDto, @UploadedFiles() obj: {files? : Express.Multer.File[], images? : Express.Multer.File[]}): Promise<Linked> {
    return await this.service.post(body, obj);
  }

  @Delete(':uuid')
  @ApiOperation({ summary: 'Delete news' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(204)
  public async delete(@Param('uuid', new ParseUUIDPipe()) id: string) {
    return await this.service.delete(id);
  }
}





