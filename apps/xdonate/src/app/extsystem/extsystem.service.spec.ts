import { Test, TestingModule } from '@nestjs/testing';
import { ExtsystemService } from './extsystem.service';
import { ExtsystemTestModule } from './test/extsystem.test.module';

describe('ExtsystemService', () => {
  let service: ExtsystemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ExtsystemTestModule],
    }).compile();

    service = module.get<ExtsystemService>(ExtsystemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return config', () => {
    expect(service.getConfig()).toEqual({})
  });
});
 