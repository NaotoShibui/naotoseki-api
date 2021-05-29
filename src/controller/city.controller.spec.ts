import { Test, TestingModule } from '@nestjs/testing';
import { CityMstController } from './cityMst.controller';

describe('CityMstController', () => {
  let controller: CityMstController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CityMstController],
    }).compile();

    controller = module.get<CityMstController>(CityMstController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
