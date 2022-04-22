import { News, CreateNewsDto } from '../entity/news.entity';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Linked, CreateLinkedDto } from '../entity/linked.entity';
import { File, CreateFileDto } from '../entity/file.entity';
import { Image, CreateImageDto } from '../entity/image.entity';
import { FileService } from '../services/file.service';
import {unlinkSync} from 'fs';
@Injectable()
export class NewsService {
  @InjectRepository(News)
  private readonly repository: Repository<News>;

  async find(id: string): Promise<News> {
    const obj = await this.repository.findOne(id,{ relations: ["linked"] });
    console.log(obj)
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async get(): Promise<News[]> {
    const obj = await this.repository.find({ relations: ["linked"] });//"file","image",
    console.log(obj)
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }


  public async put( id: string, obj: {files? : Express.Multer.File[], images? : Express.Multer.File[]}): Promise<News> {
    // const Lin = await this.repository.findOne(id,{ relations: ["file","image"] });
    // if (Lin) {
    //   console.log(Lin)
    //   obj.files.forEach(element => {
    //     let fobj: File = new File();
    //     fobj.name = this.translit(element.originalname);
    //     fobj.id=element.filename.split('.')[0]
    //     Lin.file.push(fobj);
    //   });
    //   obj.images.forEach(element => {
    //     let iobj: Image = new Image();
    //     iobj.name = this.translit(element.originalname);
    //     iobj.id=element.filename.split('.')[0]
    //     Lin.image.push(iobj)  
    //   });
    //   return this.repository.save(Lin);
    // }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }


    public async post( body: CreateNewsDto, obj: {files? : Express.Multer.File[], images? : Express.Multer.File[]}): Promise<News> {
    let files=[]
    obj.files.forEach(element => {
      let fobj: File = new File();
      fobj.name = this.translit(element.originalname);
      fobj.id=element.filename.split('.')[0]
      files.push(fobj)  
    });
    let images=[]
    obj.images.forEach(element => {
      let iobj: Image = new Image();
      iobj.name = this.translit(element.originalname);
      iobj.id=element.filename.split('.')[0]
      images.push(iobj)  
    });
    const lobj: Linked = new Linked();
    lobj.file = files;
    lobj.image = images;
    const nobj: News = new News();
    nobj.linked = lobj;
    nobj.title = body.title;
    nobj.content = body.content;
    nobj.date = body.date;
    if (nobj) {
      return this.repository.save(nobj);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async delete(id: string): Promise<News> {
    // const Lin = await this.repository.findOne(id,{ relations: ["file","image"] });
    // if (Lin) {
    //   console.log(Lin)
    //   Lin.image.forEach(element => {
    //     try {
    //       unlinkSync("./../data/images/"+element.id+"."+element.name.split('.')[1])
    //     } catch(err) {
    //       console.error(err)
    //     }
    //   });
    //   Lin.file.forEach(element => {
    //     try {
    //       unlinkSync("./../data/files/"+element.id+"."+element.name.split('.')[1])
    //     } catch(err) {
    //       console.error(err)
    //     }
    //   });
    // }
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





   