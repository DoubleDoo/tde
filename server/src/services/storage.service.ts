import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Storage, CreateStorageDto } from '../entity/storage.entity';

@Injectable()
export class StorageService {
  @InjectRepository(Storage)
  private readonly repository: Repository<Storage>;

  async find(id: string): Promise<Storage> {
    const obj = await this.repository.findOne(id);
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async get(): Promise<Storage[]> {
    const obj = await this.repository.find();
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }


  public async put(id: string, body: CreateStorageDto): Promise<Storage> {
    const obj = await this.repository.findOne(id);
    obj.content = body.content;
    obj.title = body.title;
    obj.price = body.price;
    obj.nds = body.nds;
    obj.count = body.count;
    if (obj) {
      return this.repository.save(obj);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async post(body: CreateStorageDto): Promise<Storage> {
    const obj: Storage = new Storage();
    obj.content = body.content;
    obj.title = body.title;
    obj.price = body.price;
    obj.nds = body.nds;
    obj.count = body.count;
    if (obj) {
      return this.repository.save(obj);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async delete(id: string): Promise<Storage> {
    const obj = await this.repository.delete(id)
    return
  }
}

