import { Test, TestingModule } from '@nestjs/testing';
import { ExtsystemService } from './extsystem.service';

describe('ExtsystemService', () => {
  let service: ExtsystemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtsystemService],
    }).compile();

    service = module.get<ExtsystemService>(ExtsystemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return config', () => {
    expect(service.getConfig()).toEqual({});
  });
});
