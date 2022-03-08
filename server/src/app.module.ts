import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { ArticleController } from './controllers/article.controller';
import { ArticleService } from './services/article.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'ec2-34-247-151-118.eu-west-1.compute.amazonaws.com',
    //   port: 5432,
    //   username: 'vdgbxqgskuokpr',
    //   password: '0d3e77b2a7c723372ff24876908c727d2cfa2ce923b524aace86533af388b8cf',
    //   database: 'd45opuimvh51pr',
    //   entities: ["../models/*.ts"],
    //   synchronize: true,
    //   ssl: {
    //     rejectUnauthorized: false,
    // }
    // }),
  ],
  controllers: [AppController,ArticleController],
  providers: [AppService,ArticleService],
})
export class AppModule {
  // constructor(private connection: Connection) {}
}
