import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FeatureApiService } from './feature-api.service';
import { CreateFeatureApiDto } from './dto/create-feature-api.dto';
import { UpdateFeatureApiDto } from './dto/update-feature-api.dto';

@Controller('feature-api')
export class FeatureApiController {
  constructor(private readonly featureApiService: FeatureApiService) {}

  @Post()
  create(@Body() createFeatureApiDto: CreateFeatureApiDto) {
    return this.featureApiService.create(createFeatureApiDto);
  }

  @Get()
  findAll() {
    return this.featureApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.featureApiService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFeatureApiDto: UpdateFeatureApiDto
  ) {
    return this.featureApiService.update(+id, updateFeatureApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.featureApiService.remove(+id);
  }
}
