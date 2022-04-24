import { 
  TestProtocol, 
  CreateTestProtocolDto 
} from '../entity/testProtocol.entity';
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
export class TestProtocolService {
 @InjectRepository(TestProtocol)
 private readonly repository: Repository<TestProtocol>;

 async find(id: string): Promise<TestProtocol> {
   const obj = await this.repository.findOne(id,{ relations: ["linked"] });
   console.log(obj)
   if (obj) {
     return obj;
   }
   throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
 }

 public async get(): Promise<TestProtocol[]> {
   const obj = await this.repository.find({ relations: ["linked"] });
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


   public async post( body: CreateTestProtocolDto, obj: {files? : Express.Multer.File[], images? : Express.Multer.File[]}): Promise<TestProtocol> {
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
   const nobj: TestProtocol = new TestProtocol();
   nobj.linked = lobj;
   nobj.title = body.title;
   nobj.content = body.content;
   if (nobj) {
     return this.repository.save(nobj);
   }
   throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
 }

 public async delete(id: string): Promise<TestProtocol> {
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
