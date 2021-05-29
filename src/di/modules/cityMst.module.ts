import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { cityMstProviders } from '../providers/cityMst.providers';
import { CityMstService } from '../../service/cityMst.service';
import { CityMstController } from 'src/controller/cityMst.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CityMstController],
  providers: [
    ...cityMstProviders,
    CityMstService,
  ],
})
export class CityMstModule {}