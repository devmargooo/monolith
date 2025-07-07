import { Test, TestingModule } from '@nestjs/testing';
import { UsersApiController } from './users-api.controller';
import { UsersApiService } from './users-api.service';

describe('UsersApiController', () => {
  let controller: UsersApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersApiController],
      providers: [UsersApiService],
    }).compile();

    controller = module.get<UsersApiController>(UsersApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
