import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Solution, CreateSolutionDto } from '../entity/solution.entity';

@Injectable()
export class SolutionService {
  @InjectRepository(Solution)
  private readonly repository: Repository<Solution>;

  async find(id: string): Promise<Solution> {
    const obj = await this.repository.findOne(id);
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async get(): Promise<Solution[]> {
    const obj = await this.repository.find();
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }


  public async put(id: string, body: CreateSolutionDto): Promise<Solution> {
    const obj = await this.repository.findOne(id);
    obj.content = body.content;
    obj.title = body.title;
    if (obj) {
      return this.repository.save(obj);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async post(body: CreateSolutionDto): Promise<Solution> {
    const obj: Solution = new Solution();
    obj.content = body.content;
    obj.title = body.title;
    if (obj) {
      return this.repository.save(obj);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async delete(id: string): Promise<Solution> {
    const obj = await this.repository.delete(id)
    return
  }
}

