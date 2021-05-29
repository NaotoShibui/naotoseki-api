import { Module } from '@nestjs/common';
import { CityMasterModule } from './cityMster.module';
import { DatabaseModule } from './database.module';
import { AppController } from '../../controller/app.controller';
import { CityMasterController } from '../../controller/cityMaster.controller';
import { AppService } from '../../service/app.service';
import { CityMasterService } from '../../service/cityMaster.service';

@Module({
  imports: [CityMasterModule, DatabaseModule],
  controllers: [AppController, CityMasterController],
  providers: [AppService, CityMasterService],
})
export class AppModule {}
