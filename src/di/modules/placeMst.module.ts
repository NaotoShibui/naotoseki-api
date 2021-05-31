import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { placeMstProviders } from '../providers/placeMst.providers';
import { PlaceMstService } from '../../service/placeMst.service';
import { PlaceMstController } from 'src/controller/placeMst.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PlaceMstController],
  providers: [
    ...placeMstProviders,
    PlaceMstService,
  ],
})
export class PlaceMstModule {}