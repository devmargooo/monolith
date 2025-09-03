import { Injectable } from '@nestjs/common';
import { CreateDonateDto } from './dto/create-donate.dto';
import { UpdateDonateDto } from './dto/update-donate.dto';

@Injectable()
export class DonateService {
  create(createDonateDto: CreateDonateDto) {
    return 'This action adds a new donate';
  }

  findAll() {
    return `This action returns all donate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} donate`;
  }

  update(id: number, updateDonateDto: UpdateDonateDto) {
    return `This action updates a #${id} donate`;
  }

  remove(id: number) {
    return `This action removes a #${id} donate`;
  }
}
