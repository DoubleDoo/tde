import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Certificate, CreateCertificateDto } from '../entity/certificate.entity';

@Injectable()
export class CertificateService {
  @InjectRepository(Certificate)
  private readonly repository: Repository<Certificate>;

  async find(id: string): Promise<Certificate> {
    const obj = await this.repository.findOne(id);
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async get(): Promise<Certificate[]> {
    const obj = await this.repository.find();
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }


  public async put(id: string, body: CreateCertificateDto): Promise<Certificate> {
    const obj = await this.repository.findOne(id);
    obj.content = body.content;
    obj.title = body.title;
    obj.files = body.files;
    obj.images = body.images;
    if (obj) {
      return this.repository.save(obj);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async post(body: CreateCertificateDto): Promise<Certificate> {
    const obj: Certificate = new Certificate();
    obj.content = body.content;
    obj.title = body.title;
    obj.files = body.files;
    obj.images = body.images;
    if (obj) {
      return this.repository.save(obj);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async delete(id: string): Promise<Certificate> {
    const obj = await this.repository.delete(id)
    return
  }
}

