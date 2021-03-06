import { 
  Storage, 
  CreateStorageDto 
} from '../entity/storage.entity';
import { 
 HttpException, 
 HttpStatus 
} from '@nestjs/common';
import { 
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
 File, 
 CreateFileDto 
} from '../entity/file.entity';
import { 
 Image, 
 CreateImageDto 
} from '../entity/image.entity';
import { 
 FileService 
} from '../services/file.service';
import {
 unlinkSync
} from 'fs';


@Injectable()
export class StorageService {
 @InjectRepository(Storage)
 private readonly repository: Repository<Storage>;

 async find(id: string): Promise<Storage> {
   const obj = await this.repository.findOne(id,{ relations: ["linked"] });
   console.log(obj)
   if (obj) {
     return obj;
   }
   throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
 }

 public async get(): Promise<Storage[]> {
   const obj = await this.repository.find({ relations: ["linked"] });
   if (obj) {
     return obj;
   }
   throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
 }


 public async put(id: string, body: CreateStorageDto): Promise<Storage> {
   const obj = await this.repository.findOne(id);
   obj.content = body.content;
   obj.title = body.title;
   if (obj) {
     return this.repository.save(obj);
   }
   throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
 }


   public async post( body: CreateStorageDto, obj: {files? : Express.Multer.File[], images? : Express.Multer.File[]}): Promise<Storage> {
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
   const nobj: Storage = new Storage();
   nobj.linked = lobj;
   nobj.title = body.title;
   nobj.content = body.content;
   if (nobj) {
     return this.repository.save(nobj);
   }
   throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
 }

 public async delete(id: string): Promise<Storage> {
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
