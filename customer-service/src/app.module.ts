import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PUSH_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [''],
          queue: 'main_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}