import { Test, TestingModule } from '@nestjs/testing';
import { DonateController } from './donate.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqliteTestConfig } from './test/donate.db.test.config';
import { DonateTestModule } from './test/donate.test.module';

describe('DonateController', () => {
  let controller: DonateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(SqliteTestConfig), DonateTestModule],
    }).compile();

    controller = module.get<DonateController>(DonateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
