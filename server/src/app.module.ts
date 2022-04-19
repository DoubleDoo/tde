import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ProductModule } from './api.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),ProductModule
  ]
})
export class AppModule {
  constructor(private connection: Connection) {}
}