import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { File, CreateFileDto } from '../entity/file.entity';
import {unlinkSync} from 'fs';
import { StreamableFile, Response } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';


@Injectable()
export class FileService {
  @InjectRepository(File)
  private readonly repository: Repository<File>;

  async findfile(id: string,@Response({ passthrough: true }) res) {
    const obj = await this.repository.findOne(id);
    const file = createReadStream(join(process.cwd(), "./../data/files/"+id+'.pdf'));
    if (obj) {
      const str='attachment; filename='+obj.name
      console.log(obj.name)
      res.set({
        'Content-Type': 'application/json',
        'Content-Disposition': str,
      });
      res.set
      return new StreamableFile(file);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  async find(id: string): Promise<File> {
    const obj = await this.repository.findOne(id);
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async get(): Promise<File[]> {
    const obj = await this.repository.find();
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async delete(id: string): Promise<File> {
    const obj = await this.repository.findOne(id);
    if (obj) {
      try {
        unlinkSync("./../data/files/"+id+"."+obj.name.split('.')[1])
      } catch(err) {
        console.error(err)
      }
     const del = await this.repository.delete(id)
    }
    return 
  }

}

 