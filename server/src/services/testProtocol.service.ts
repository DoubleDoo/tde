import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestProtocol, CreateTestProtocolDto } from '../entity/testProtocol.entity';

@Injectable()
export class TestProtocolService {
  @InjectRepository(TestProtocol)
  private readonly repository: Repository<TestProtocol>;

  async find(id: string): Promise<TestProtocol> {
    const obj = await this.repository.findOne(id);
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async get(): Promise<TestProtocol[]> {
    const obj = await this.repository.find();
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async put(id: string, body: CreateTestProtocolDto): Promise<TestProtocol> {
    const obj = await this.repository.findOne(id);
    obj.content = body.content;
    obj.title = body.title;
    if (obj) {
      return this.repository.save(obj);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async post(body: CreateTestProtocolDto): Promise<TestProtocol> {
    const obj: TestProtocol = new TestProtocol();
    obj.content = body.content;
    obj.title = body.title;
    if (obj) {
      return this.repository.save(obj);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async delete(id: string): Promise<TestProtocol> {
    const obj = await this.repository.delete(id)
    return
  }
}

