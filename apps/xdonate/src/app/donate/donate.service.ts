import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDonateDto } from './dto/create-donate.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Donation } from './entities/donate.entity';

@Injectable()
export class DonateService {
  constructor(
    @InjectRepository(Donation)
    private readonly donationRepository: Repository<Donation>
  ) {}
  async create(createDonateDto: CreateDonateDto): Promise<Donation> {
    const donation = this.donationRepository.create(createDonateDto);
    return await this.donationRepository.save(donation);
  }

  async findAll(): Promise<Donation[]> {
    return await this.donationRepository.find({
      order: { timestamp: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Donation> {
    const donation = await this.donationRepository.findOne({
      where: { donation_id: id },
    });

    if (!donation) {
      throw new NotFoundException(`Donation with ID ${id} not found`);
    }

    return donation;
  }

  // update(id: number, updateDonateDto: UpdateDonateDto) {
  //   return `This action updates a #${id} donate`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} donate`;
  // }
}
