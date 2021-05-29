import { Module } from '@nestjs/common';
import { CityMasterModule } from './cityMster.module';
import { AppController } from '../../controller/app.controller';
import { AppService } from '../../service/app.service';

@Module({
  imports: [CityMasterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
