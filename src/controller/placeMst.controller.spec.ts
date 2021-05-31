import { Test, TestingModule } from '@nestjs/testing';
import { PlaceMstController } from './placeMst.controller';

describe('PlaceMstController', () => {
  let controller: PlaceMstController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlaceMstController],
    }).compile();

    controller = module.get<PlaceMstController>(PlaceMstController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
