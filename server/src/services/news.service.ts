import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News, CreateNewsDto } from '../entity/news.entity';

@Injectable()
export class NewsService {
  @InjectRepository(News)
  private readonly repository: Repository<News>;

  async find(id: string): Promise<News> {
    const obj = await this.repository.findOne(id);
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async get(): Promise<News[]> {
    const obj = await this.repository.find();
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }


  public async put(id: string, body: CreateNewsDto): Promise<News> {
    const obj = await this.repository.findOne(id);
    obj.title = body.title;
    obj.content = body.content;
    obj.date = body.date;
    if (obj) {
      return this.repository.save(obj);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async post(body: CreateNewsDto): Promise<News> {
    const obj: News = new News();
    // obj.content = body.content;
    // obj.title = body.title;
    if (obj) {
      return this.repository.save(obj);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async delete(id: string): Promise<News> {
    const obj = await this.repository.delete(id)
    return
  }
}

