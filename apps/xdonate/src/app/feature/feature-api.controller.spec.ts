import { Test, TestingModule } from '@nestjs/testing';
import { FeatureApiController } from './feature-api.controller';
import { FeatureApiService } from './feature-api.service';

describe('FeatureApiController', () => {
  let controller: FeatureApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeatureApiController],
      providers: [FeatureApiService],
    }).compile();

    controller = module.get<FeatureApiController>(FeatureApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
