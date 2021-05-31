import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { soundArchivesProviders } from '../providers/soundArchives.providers';
import { SoundArchivesService } from '../../service/soundArchives.service';
import { SoundArchivesController } from 'src/controller/soundArchives.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [SoundArchivesController],
  providers: [
    ...soundArchivesProviders,
    SoundArchivesService,
  ],
})
export class SoundArchivesModule {}