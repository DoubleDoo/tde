import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image, CreateImageDto } from '../entity/image.entity';
import {unlinkSync} from 'fs';
import { StreamableFile, Response } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';


@Injectable()
export class ImageService {
  @InjectRepository(Image)
  private readonly repository: Repository<Image>;

  async findimage(id: string,@Response({ passthrough: true }) res) {
    const obj = await this.repository.findOne(id);
    const file = createReadStream(join(process.cwd(), "./../data/images/"+id+'.jpg'));
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

  async find(id: string): Promise<Image> {
    const obj = await this.repository.findOne(id);
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async get(): Promise<Image[]> {
    const obj = await this.repository.find();
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async post( body: CreateImageDto, file: Express.Multer.File) {
    const obj: Image = new Image();
    obj.name = this.translit(body.name);
    obj.id=file.filename.split('.')[0]
    if (obj) {
       return this.repository.save(obj);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async delete(id: string): Promise<File> {
    try {
       unlinkSync("./../data/images/"+id+'.jpg')
     } catch(err) {
       console.error(err)
     }
    const obj = await this.repository.delete(id)
    return 
  }

  private translit(word){
    var answer = '';
    var converter = {
      'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
      'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
      'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
      'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
      'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
      'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
      'э': 'e',    'ю': 'yu',   'я': 'ya',
   
      'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
      'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
      'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
      'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
      'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
      'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
      'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
    };
   
    for (var i = 0; i < word.length; ++i ) {
      if (converter[word[i]] == undefined){
        answer += word[i];
      } else {
        answer += converter[word[i]];
      }
    }
   
    return answer;
  }
}

