import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CustomerDTO } from './dtos/CustomerDTO';

@Controller()
export class AppController {
  constructor() {}

  @EventPattern('createdCustomer')
  async createCustomer(customer: CustomerDTO) {
    // Push atacak method.
    console.log('Mail gönderildi: ' + JSON.stringify(customer))
  }
}
