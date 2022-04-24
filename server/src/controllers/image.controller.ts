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
  Image 
} from '../entity/image.entity';
import { 
  ImageService 
} from '../services/image.service';
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
  @ApiOperation({ summary: 'Get image by id, if "download" value set true, return download link, else return info about entity from db' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(200)
  public async find(@Param('uuid', new ParseUUIDPipe()) id: string, @Param('download', new ParseBoolPipe()) download: boolean,   @Response({ passthrough: true }) res) {
    if (download){
      return await this.service.findimage(id, res);
    }
    return await this.service.find(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get list of all image entities from db' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(200)
  public async get(): Promise<Image[]> {
    return await this.service.get();
  }

  @Delete(':uuid')
  @ApiOperation({ summary: 'Delete image by id' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(204)
  public async delete(@Param('uuid', new ParseUUIDPipe()) id: string) {
    return await this.service.delete(id);
  }
}



