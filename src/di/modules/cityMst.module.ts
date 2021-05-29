import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { cityMstProviders } from '../providers/cityMst.providers';
import { CityMstService } from '../../service/cityMst.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...cityMstProviders,
    CityMstService,
  ],
})
export class CityMstModule {}