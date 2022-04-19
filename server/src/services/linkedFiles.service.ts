import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LinkedFiles, CreateLinkedFilesDto } from '../entity/linkedFiles.entity';

@Injectable()
export class LinkedFilesService {
  @InjectRepository(LinkedFiles)
  private readonly repository: Repository<LinkedFiles>;

  async find(id: string): Promise<LinkedFiles> {
    const obj = await this.repository.findOne(id);
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async get(): Promise<LinkedFiles[]> {
    const obj = await this.repository.find({ relations: ["file"] });
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }


  public async put(id: string, body: CreateLinkedFilesDto): Promise<LinkedFiles> {
    const obj = await this.repository.findOne(id);
    obj.object = body.object;
    obj.file = body.file;
    if (obj) {
      return this.repository.save(obj);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async post(body: CreateLinkedFilesDto): Promise<LinkedFiles> {
    const obj: LinkedFiles = new LinkedFiles();
    obj.object = body.object;
    obj.file = body.file;
    if (obj) {
      return this.repository.save(obj);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async delete(id: string): Promise<LinkedFiles> {
    const obj = await this.repository.delete(id)
    return
  }
}

