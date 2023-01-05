import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiModule } from './api.module';
import { AuthModule } from './auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "172.17.0.1",
      port: 5432,
      username: "tdeadmin",
      password: "7140043",
      database: "tdebd",
      logging: true,
      entities: [
         "dist/entity/*{.js,.ts}"
      ],
      migrations: ["dist/migration/*{.js,.ts}"],
      // cli: {
      //     entitiesDir: "src/entity",
      //     migrationsDir: "src/migration"
      // },
     synchronize: false
    }),
    ApiModule,
    AuthModule
  ]
})
export class AppModule {

}