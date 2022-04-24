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
  HttpCode 
} from '@nestjs/common';
import { 
  Contact,
  CreateContactDto 
} from '../entity/contact.entity';
import { 
  ContactService 
} from '../services/contact.service';
import {
  // ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('contact')
@Controller('contact')
export class ContactController {
  @Inject(ContactService)
  private readonly service: ContactService;

  @Get(':uuid')
  @ApiOperation({ summary: 'Get contact entity by id' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(200)
  public async find(@Param('uuid', new ParseUUIDPipe()) id: string): Promise<Contact>{
    return await this.service.find(id);
  }

  @Put(':uuid')
  @ApiOperation({ summary: 'Change contact entity by id' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(200)
  public async put(@Param('uuid', new ParseUUIDPipe()) id: string, @Body() body: CreateContactDto): Promise<Contact>{
    return await this.service.put(id,body);
  }

  @Get()
  @ApiOperation({ summary: 'Get list of all contact entities' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(200)
  public async get(): Promise<Contact[]> {
    return await this.service.get();
  }

  @Post()
  @ApiOperation({ summary: 'Create contact entity' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(201)
  public async post(@Body() body: CreateContactDto): Promise<Contact> {
    return await this.service.post(body);
  }

  @Delete(':uuid')
  @ApiOperation({ summary: 'Delete contact entity' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @HttpCode(204)
  public async delete(@Param('uuid', new ParseUUIDPipe()) id: string) {
    return await this.service.delete(id);
  }
}