import { Test, TestingModule } from '@nestjs/testing';
import { DonateService } from './donate.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqliteTestConfig } from './test/donate.db.test.config';
import { DonateTestModule } from './test/donate.test.module';
import { CreateDonateDto } from './dto/create-donate.dto';
import { NotFoundException } from '@nestjs/common';
import { Donation } from './entities/donate.entity';

describe('DonateService', () => {
  let service: DonateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(SqliteTestConfig), DonateTestModule],
    }).compile();

    service = module.get<DonateService>(DonateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findOne() returns entity by id after create()', async () => {
    const dto: CreateDonateDto = {
      amount: 50,
      payment_id: 'abc',
      status: 'new',
      username: 'Bob',
      useremail: 'bob@test.ru',
    };
    const created = await service.create(dto);

    const found = await service.findOne(created.donation_id);
    expect(found).toBeDefined();
    expect(found.donation_id).toBe(created.donation_id);
  });

  it('findOne() throws NotFoundException for missing id', async () => {
    await expect(service.findOne('non-existent-id')).rejects.toBeInstanceOf(
      NotFoundException
    );
  });

  it('findAll() returns saved donations (most recent first if timestamp exists)', async () => {
    const a = await service.create({
      payment_id: 'abc',
      amount: 10,
      status: 'new',
      username: 'Bob',
      useremail: 'bob@test.ru',
    });
    // небольшая пауза, чтобы отличались метки времени
    await new Promise((r) => setTimeout(r, 150));
    const b = await service.create({
      payment_id: 'def',
      amount: 20,
      status: 'new',
      username: 'Bob',
      useremail: 'bob@test.ru',
    });

    const list = await service.findAll();

    expect(Array.isArray(list)).toBe(true);
    expect(list.length).toBeGreaterThanOrEqual(2);

    const ids = list.map((x) => x.donation_id);
    expect(ids).toEqual(expect.arrayContaining([a.donation_id, b.donation_id]));

    const first = list[0] as Donation;
    const second = list[1] as Donation;
    if (first.timestamp && second.timestamp) {
      expect(new Date(first.timestamp).getTime()).toBeGreaterThanOrEqual(
        new Date(second.timestamp).getTime()
      );
    }
  });
});
