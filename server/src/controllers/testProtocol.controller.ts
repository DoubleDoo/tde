import { 
  TestProtocol,
  CreateTestProtocolDto 
} from '../entity/testProtocol.entity';
import { 
  TestProtocolService 
} from '../services/testProtocol.service';
import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Delete,
  HttpCode,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  diskStorage
} from 'multer';
import {
  v4 as uuidv4
} from 'uuid';
import {
  FileFieldsInterceptor
} from '@nestjs/platform-express';
import {
  // ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiConsumes,
  ApiBody
} from '@nestjs/swagger';

@ApiTags('testprotocol')
@Controller('testprotocol')
export class TestProtocolController {
  @Inject(TestProtocolService)
  private readonly service: TestProtocolService;

  @Get(':uuid')
  @ApiOperation({ summary: 'Get testprotocol entity by id' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(200)
  public async find(@Param('uuid', new ParseUUIDPipe()) id: string): Promise<TestProtocol> {
    return await this.service.find(id);
  }


  @Get()
  @ApiOperation({ summary: 'Get list of all testprotocol entities' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(200)
  public async get(): Promise<TestProtocol[]> {
    return await this.service.get();
  }

  @Put(':uuid')
  @ApiOperation({ summary: 'Change testprotocol entity by id' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(200)
  public async put(@Param('uuid', new ParseUUIDPipe()) id: string, @Body() body: CreateTestProtocolDto): Promise<TestProtocol> {
    return await this.service.put(id, body);
  }


  @Post()
  @ApiOperation({ summary: 'Create testprotocol entity' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          format: 'json',
        },
        content: {
          type: 'string',
          format: 'json',
        },
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
        let ext = obj.originalname.split('\.')
        if (ext[1] === "pdf" ||
          ext[1] === "xls" ||
          ext[1] === "xlsx" ||
          ext[1] === "doc" ||
          ext[1] === "docx") {
          cb(null, './../data/files')
        }
        else if (ext[1] === "jpg" ||
          ext[1] === "png" ||
          ext[1] === "jpeg") {
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
      if (ext[1] === "pdf" ||
        ext[1] === "xls" ||
        ext[1] === "xlsx" ||
        ext[1] === "doc" ||
        ext[1] === "docx" ||
        ext[1] === "jpg" ||
        ext[1] === "png" ||
        ext[1] === "jpeg") {
        return callback(null, true)
      }
      return callback(new Error('Only files with extension pdf,xls,xlsx,doc,docx are allowed and images with extension jpg,png,jpeg'), false)
    },

  }))
  public async post(@Body() body: CreateTestProtocolDto, @UploadedFiles() obj: { files?: Express.Multer.File[], images?: Express.Multer.File[] }): Promise<TestProtocol> {
    return await this.service.post(body, obj);
  }

  @Delete(':uuid')
  @ApiOperation({ summary: 'Delete testprotocol' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(204)
  public async delete(@Param('uuid', new ParseUUIDPipe()) id: string) {
    return await this.service.delete(id);
  }
}
