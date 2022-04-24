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
  Contact, 
  CreateContactDto 
} from '../entity/contact.entity';

@Injectable()
export class ContactService {
  @InjectRepository(Contact)
  private readonly repository: Repository<Contact>;

  async find(id: string): Promise<Contact> {
    const obj = await this.repository.findOne(id);
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async get(): Promise<Contact[]> {
    const obj = await this.repository.find();
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }


  public async put(id: string, body: CreateContactDto): Promise<Contact> {
    const obj = await this.repository.findOne(id);
    obj.title = body.title;
    obj.address = body.address;
    obj.email = body.email;
    obj.phone = body.phone;
    obj.fax = body.fax;
    obj.work_time = body.work_time;
    obj.timezone = body.timezone;
    if (obj) {
      return this.repository.save(obj);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async post(body: CreateContactDto): Promise<Contact> {
    const obj: Contact = new Contact();
    obj.title = body.title;
    obj.address = body.address;
    obj.email = body.email;
    obj.phone = body.phone;
    obj.fax = body.fax;
    obj.work_time = body.work_time;
    obj.timezone = body.timezone;
    if (obj) {
      return this.repository.save(obj);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async delete(id: string): Promise<Contact> {
    const obj = await this.repository.delete(id)
    return
  }
}

