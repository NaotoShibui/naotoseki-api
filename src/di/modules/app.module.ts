import { Module } from '@nestjs/common';
import { CityMstModule } from './cityMst.module';
import { AppController } from '../../controller/app.controller';
import { AppService } from '../../service/app.service';

@Module({
  imports: [CityMstModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
