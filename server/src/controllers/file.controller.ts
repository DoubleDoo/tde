import { 
  Controller, 
  Get, 
  Inject, 
  Param, 
  ParseUUIDPipe, 
  Delete, 
  HttpCode, 
  ParseBoolPipe,
  Response 
} from '@nestjs/common';
import { 
  File 
} from '../entity/file.entity';
import { 
  FileService 
} from '../services/file.service';
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
  @ApiOperation({ summary: 'Get file by id, if "download" value set true, return download link, else return info about entity from db' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(200)
  public async find(@Param('uuid', new ParseUUIDPipe()) id: string, @Param('download', new ParseBoolPipe()) download: boolean,   @Response({ passthrough: true }) res) {
    if (download){
      return await this.service.findfile(id, res);
    }
    return await this.service.find(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get list of all file entitys from db' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(200)
  public async get(): Promise<File[]> {
    return await this.service.get();
  }

  @Delete(':uuid')
  @ApiOperation({ summary: 'Delete file by id' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(204)
  public async delete(@Param('uuid', new ParseUUIDPipe()) id: string) {
    return await this.service.delete(id);
  }
}



