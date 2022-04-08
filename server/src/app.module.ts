import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';


import { ProductModule } from './product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),ProductModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor(private connection: Connection) {}
}