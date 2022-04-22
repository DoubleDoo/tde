import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CertificateController } from './controllers/certificate.controller';
import { CertificateService } from './services/certificate.service';
import { Certificate } from './entity/certificate.entity';

import { ContactController } from './controllers/contact.controller';
import { ContactService } from './services/contact.service';
import { Contact } from './entity/contact.entity';

import { FileController } from './controllers/file.controller';
import { FileService } from './services/file.service';
import { File } from './entity/file.entity';

import { ImageController } from './controllers/image.controller';
import { ImageService } from './services/image.service';
import { Image } from './entity/image.entity';

import { NewsController } from './controllers/news.controller';
import { NewsService } from './services/news.service';
import { News } from './entity/news.entity';

import { RequisiteController } from './controllers/requisite.controller';
import { RequisiteService } from './services/requisite.service';
import { Requisite } from './entity/requisite.entity';

import { SolutionController } from './controllers/solution.controller';
import { SolutionService } from './services/solution.service';
import { Solution } from './entity/solution.entity';

import { StorageController } from './controllers/storage.controller';
import { StorageService } from './services/storage.service';
import { Storage } from './entity/storage.entity';

import { TestProtocolController } from './controllers/testProtocol.controller';
import { TestProtocolService } from './services/testProtocol.service';
import { TestProtocol } from './entity/testProtocol.entity';

import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { Product } from './entity/product.entity';

import { LinkedController } from './controllers/linked.controller';
import { LinkedService } from './services/linked.service';
import { Linked } from './entity/linked.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Certificate]),
    TypeOrmModule.forFeature([Contact]),
    TypeOrmModule.forFeature([News]),
    TypeOrmModule.forFeature([Requisite]),
    TypeOrmModule.forFeature([Solution]),
    TypeOrmModule.forFeature([Storage]),
    TypeOrmModule.forFeature([TestProtocol]),
    TypeOrmModule.forFeature([Product]),
    TypeOrmModule.forFeature([File]),
    TypeOrmModule.forFeature([Image]),
    TypeOrmModule.forFeature([Linked]),
],
  controllers: [
    ProductController,
    CertificateController,
    ContactController,
    FileController,
    ImageController,
    NewsController,
    RequisiteController,
    SolutionController,
    StorageController,
    TestProtocolController,
    LinkedController
  ],
  providers: [
    ProductService,
    CertificateService,
    ContactService,
    FileService,
    ImageService,
    NewsService,
    RequisiteService,
    SolutionService,
    StorageService,
    TestProtocolService,
    LinkedService
  ],
})
export class ProductModule {}