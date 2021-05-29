import { Module } from '@nestjs/common';
import { AppController } from '../../controller/app.controller';
import { CityMasterController } from '../../controller/cityMaster.controller';
import { AppService } from '../../service/app.service';
import { CityMasterService } from '../../service/cityMaster.service';

@Module({
  imports: [],
  controllers: [AppController, CityMasterController],
  providers: [AppService, CityMasterService],
})
export class AppModule {}
