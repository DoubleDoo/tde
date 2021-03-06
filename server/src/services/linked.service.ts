import {
  HttpException, 
  HttpStatus,
  Injectable
} from '@nestjs/common';
import { 
  InjectRepository 
} from '@nestjs/typeorm';
import { 
  Repository 
} from 'typeorm';
import { 
  Linked, 
  CreateLinkedDto 
} from '../entity/linked.entity';
import { 
  File 
} from '../entity/file.entity';
import { 
  Image 
} from '../entity/image.entity';
import {
  unlinkSync
} from 'fs';

@Injectable()
export class LinkedService {
  @InjectRepository(Linked)
  private readonly repository: Repository<Linked>;

  async find(id: string): Promise<Linked> {
    const obj = await this.repository.findOne(id,{ relations: ["file","image"] });
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async get(): Promise<Linked[]> {
    const obj = await this.repository.find({ relations: ["file","image"] });
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }


  public async put( id: string, obj: {files? : Express.Multer.File[], images? : Express.Multer.File[]}): Promise<Linked> {
    const Lin = await this.repository.findOne(id,{ relations: ["file","image"] });
    if (Lin) {
      console.log(Lin)
      obj.files.forEach(element => {
        let fobj: File = new File();
        fobj.name = this.translit(element.originalname);
        fobj.id=element.filename.split('.')[0]
        Lin.file.push(fobj);
      });
      obj.images.forEach(element => {
        let iobj: Image = new Image();
        iobj.name = this.translit(element.originalname);
        iobj.id=element.filename.split('.')[0]
        Lin.image.push(iobj)  
      });
      return this.repository.save(Lin);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

    public async post( body: CreateLinkedDto, obj: {files? : Express.Multer.File[], images? : Express.Multer.File[]}): Promise<Linked> {
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
    const Lin: Linked = new Linked();
    Lin.file = files;
    Lin.image = images;
    if (Lin) {
      return this.repository.save(Lin);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async delete(id: string): Promise<Linked> {
    const Lin = await this.repository.findOne(id,{ relations: ["file","image"] });
    if (Lin) {
      console.log(Lin)
      Lin.image.forEach(element => {
        try {
          unlinkSync("./../data/images/"+element.id+"."+element.name.split('.')[1])
        } catch(err) {
          console.error(err)
        }
      });
      Lin.file.forEach(element => {
        try {
          unlinkSync("./../data/files/"+element.id+"."+element.name.split('.')[1])
        } catch(err) {
          console.error(err)
        }
      });
    }
    const obj = await this.repository.delete(id)
    return
  }

  private translit(word){
    var answer = '';
    var converter = {
      '??': 'a',    '??': 'b',    '??': 'v',    '??': 'g',    '??': 'd',
      '??': 'e',    '??': 'e',    '??': 'zh',   '??': 'z',    '??': 'i',
      '??': 'y',    '??': 'k',    '??': 'l',    '??': 'm',    '??': 'n',
      '??': 'o',    '??': 'p',    '??': 'r',    '??': 's',    '??': 't',
      '??': 'u',    '??': 'f',    '??': 'h',    '??': 'c',    '??': 'ch',
      '??': 'sh',   '??': 'sch',  '??': '',     '??': 'y',    '??': '',
      '??': 'e',    '??': 'yu',   '??': 'ya',
   
      '??': 'A',    '??': 'B',    '??': 'V',    '??': 'G',    '??': 'D',
      '??': 'E',    '??': 'E',    '??': 'Zh',   '??': 'Z',    '??': 'I',
      '??': 'Y',    '??': 'K',    '??': 'L',    '??': 'M',    '??': 'N',
      '??': 'O',    '??': 'P',    '??': 'R',    '??': 'S',    '??': 'T',
      '??': 'U',    '??': 'F',    '??': 'H',    '??': 'C',    '??': 'Ch',
      '??': 'Sh',   '??': 'Sch',  '??': '',     '??': 'Y',    '??': '',
      '??': 'E',    '??': 'Yu',   '??': 'Ya'
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





   




 