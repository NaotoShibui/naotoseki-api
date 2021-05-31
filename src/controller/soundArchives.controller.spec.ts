import { Test, TestingModule } from '@nestjs/testing';
import { SoundArchivesController } from './soundArchives.controller';

describe('SoundArchivesController', () => {
  let controller: SoundArchivesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoundArchivesController],
    }).compile();

    controller = module.get<SoundArchivesController>(SoundArchivesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
