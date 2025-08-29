import { Test } from '@nestjs/testing';
import { AppService } from './app.service';
import { ExtsystemTestConfig } from './extsystem/test/extsystem.test.config';
import { ExtsystemTestModule } from './extsystem/test/extsystem.test.module';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      imports: [ExtsystemTestModule],
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(service.getData()).toEqual({
        message: 'Hello API',
        config: ExtsystemTestConfig,
      });
    });
  });
});
