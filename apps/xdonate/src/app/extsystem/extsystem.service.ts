import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IExtsystemConfig } from './config/extsystem.config.interface';

@Injectable()
export class ExtsystemService {
    constructor(private config: ConfigService) {}

    getConfig(): IExtsystemConfig {
        const config = this.config.get('extsystemConfig')  ;
        if (!config) {
            throw 'No config';
        }

        return config; 
    }
}
 