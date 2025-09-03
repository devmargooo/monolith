import { Test, TestingModule } from '@nestjs/testing';
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

describe('DonateService', () => {
  let service: DonateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DonateService,
        {
          provide: getRepositoryToken(Donation),
          useValue: mockDonationRepository,
        },
      ],
    }).compile();

    service = module.get<DonateService>(DonateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
