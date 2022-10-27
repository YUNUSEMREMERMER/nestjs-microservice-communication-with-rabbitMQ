import { Injectable } from '@nestjs/common';
import { CustomerDTO } from './dtos/CustomerDTO';

@Injectable()
export class AppService {
  createCustomer(customer: CustomerDTO): CustomerDTO {
    // Customer'i db ye ekliyoruz.
    return customer;
  }
}
