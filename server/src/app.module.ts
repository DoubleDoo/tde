import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ApiModule } from './api.module';
import { AuthModule } from './auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ApiModule,
    AuthModule
  ]
})
export class AppModule {
  constructor(private connection: Connection) {}
}