import { Test, TestingModule } from '@nestjs/testing';
import { FeatureApiService } from './feature-api.service';

describe('FeatureApiService', () => {
  let service: FeatureApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeatureApiService],
    }).compile();

    service = module.get<FeatureApiService>(FeatureApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
