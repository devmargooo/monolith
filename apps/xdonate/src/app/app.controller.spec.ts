import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExtsystemTestConfig } from './extsystem/test/extsystem.test.config';
import { ExtsystemTestModule } from './extsystem/test/extsystem.test.module';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [ExtsystemTestModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({
        message: 'Hello API',
        config: ExtsystemTestConfig,
      });
    });
  });
});
