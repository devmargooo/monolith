import { Injectable } from '@nestjs/common';
import { ExtsystemService } from './extsystem/extsystem.service';
import { IExtsystemConfig } from './extsystem/config/extsystem.config.interface';

@Injectable()
export class AppService {
  constructor(private extsystemService: ExtsystemService) {}
  getData(): { message: string; config: IExtsystemConfig } {
    return { message: 'Hello API', config: this.extsystemService.getConfig() };
  }
}
