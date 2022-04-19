import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LinkedImages, CreateLinkedImagesDto } from '../entity/linkedImages.entity';

@Injectable()
export class LinkedImagesService {
  @InjectRepository(LinkedImages)
  private readonly repository: Repository<LinkedImages>;

  async find(id: string): Promise<LinkedImages> {
    const obj = await this.repository.findOne(id);
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async get(): Promise<LinkedImages[]> {
    const obj = await this.repository.find();
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }


  public async put(id: string, body: CreateLinkedImagesDto): Promise<LinkedImages> {
    const obj = await this.repository.findOne(id);
    obj.object = body.object;
    obj.image = body.image;
    if (obj) {
      return this.repository.save(obj);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async post(body: CreateLinkedImagesDto): Promise<LinkedImages> {
    const obj: LinkedImages = new LinkedImages();
    obj.object = body.object;
    obj.image = body.image;
    if (obj) {
      return this.repository.save(obj);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async delete(id: string): Promise<LinkedImages> {
    const obj = await this.repository.delete(id)
    return
  }
}

