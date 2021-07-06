import { Module } from '@nestjs/common';
import { CityMstModule } from './cityMst.module';
import { PlaceMstModule } from './placeMst.module';
import { SoundArchivesModule } from './soundArchives.module';
import { AppController } from '../../controller/app.controller';
import { AppService } from '../../service/app.service';
import { MonitoringModule } from './monitoring.module';

@Module({
  imports: [CityMstModule, PlaceMstModule, SoundArchivesModule, MonitoringModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
