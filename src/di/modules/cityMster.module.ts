import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { cityMasterProviders } from '../providers/cityMaster.providers';
import { CityMasterService } from '../../service/cityMaster.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...cityMasterProviders,
    CityMasterService,
  ],
})
export class CityMasterModule {}