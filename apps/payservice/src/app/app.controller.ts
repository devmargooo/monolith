import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RequestPaymentDto } from './dto/request-payment.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post('requestpayment')
  async requestPayment(@Body() requestPaymentDto: RequestPaymentDto) {
    return this.appService.requestPayment(requestPaymentDto);
  }
}
