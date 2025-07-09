import { PartialType } from '@nestjs/swagger';
import { CreateFeatureApiDto } from './create-feature-api.dto';

export class UpdateFeatureApiDto extends PartialType(CreateFeatureApiDto) {}
