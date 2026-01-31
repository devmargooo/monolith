import { Injectable } from '@nestjs/common';
import { RequestPaymentDto } from './dto/request-payment.dto';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async requestPayment(
    requestPaymentDto: RequestPaymentDto
  ): Promise<{ message: string }> {
    return {
      message: 'Payment request processed for ' + requestPaymentDto.email,
    };
  }
}
