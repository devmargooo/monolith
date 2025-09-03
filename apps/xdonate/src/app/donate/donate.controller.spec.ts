import { Test, TestingModule } from '@nestjs/testing';
import { DonateController } from './donate.controller';
import { DonateService } from './donate.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Donation } from './entities/donate.entity';
import { Repository } from 'typeorm';

const mockDonationRepository = {
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  createQueryBuilder: jest.fn(() => ({
    select: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
    getRawOne: jest.fn(),
  })),
};

describe('DonateController', () => {
  let controller: DonateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonateController],
      providers: [
        DonateService,
        {
          provide: getRepositoryToken(Donation),
          useValue: mockDonationRepository,
        },
      ],
    }).compile();

    controller = module.get<DonateController>(DonateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
