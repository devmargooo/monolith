import { Injectable } from '@nestjs/common';
import { CreateFeatureApiDto } from './dto/create-feature-api.dto';
import { UpdateFeatureApiDto } from './dto/update-feature-api.dto';

@Injectable()
export class FeatureApiService {
  create(createFeatureApiDto: CreateFeatureApiDto) {
    return 'This action adds a new featureApi';
  }

  findAll() {
    return `This action returns all featureApi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} featureApi`;
  }

  update(id: number, updateFeatureApiDto: UpdateFeatureApiDto) {
    return `This action updates a #${id} featureApi`;
  }

  remove(id: number) {
    return `This action removes a #${id} featureApi`;
  }
}
