import { Module } from '@nestjs/common';
import { FeatureApiService } from './feature-api.service';
import { FeatureApiController } from './feature-api.controller';

@Module({
  controllers: [FeatureApiController],
  providers: [FeatureApiService],
})
export class FeatureApiModule {}
