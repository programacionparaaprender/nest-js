import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
/* import { CatsController } from './cats.controller'; */
import { CatsController } from './cats/cats.controller';
import { MensajesController } from './mensajes/mensajes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest',
      password: 'app',
      database: 'nest',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController, CatsController, MensajesController],
  providers: [AppService],
})
export class AppModule {}
