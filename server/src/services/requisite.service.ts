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
  Requisite, 
  CreateRequisiteDto 
} from '../entity/requisite.entity';

@Injectable()
export class RequisiteService {
  @InjectRepository(Requisite)
  private readonly repository: Repository<Requisite>;

  async find(id: string): Promise<Requisite> {
    const obj = await this.repository.findOne(id);
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async get(): Promise<Requisite[]> {
    const obj = await this.repository.find();
    if (obj) {
      return obj;
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }
  
  public async put(id: string, body: CreateRequisiteDto): Promise<Requisite> {
    const obj = await this.repository.findOne(id);
    obj.short_name = body.short_name;
    obj.long_name = body.long_name;
    obj.legal_address = body.legal_address;
    obj.inn = body.inn;
    obj.kpp = body.kpp;
    obj.ogrn = body.ogrn;
    obj.okato = body.okato;
    obj.okved = body.okved;
    obj.okpo = body.okpo;
    obj.okogu = body.okogu;
    obj.oktmo = body.oktmo;
    obj.payment_address = body.payment_address;
    obj.bank = body.bank;
    obj.correspondence_address = body.correspondence_address;
    obj.bik = body.bik;
    obj.director_name = body.director_name;
    obj.director_surname = body.director_surname;
    obj.director_patronymic = body.director_patronymic;
    if (obj) {
      return this.repository.save(obj);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async post(body: CreateRequisiteDto): Promise<Requisite> {
    const obj: Requisite = new Requisite();
    obj.short_name = body.short_name;
    obj.long_name = body.long_name;
    obj.legal_address = body.legal_address;
    obj.inn = body.inn;
    obj.kpp = body.kpp;
    obj.ogrn = body.ogrn;
    obj.okato = body.okato;
    obj.okved = body.okved;
    obj.okpo = body.okpo;
    obj.okogu = body.okogu;
    obj.oktmo = body.oktmo;
    obj.payment_address = body.payment_address;
    obj.bank = body.bank;
    obj.correspondence_address = body.correspondence_address;
    obj.bik = body.bik;
    obj.director_name = body.director_name;
    obj.director_surname = body.director_surname;
    obj.director_patronymic = body.director_patronymic;
    if (obj) {
      return this.repository.save(obj);
    }
    throw new HttpException('Exception', HttpStatus.BAD_REQUEST);
  }

  public async delete(id: string): Promise<Requisite> {
    const obj = await this.repository.delete(id)
    return
  }
}


