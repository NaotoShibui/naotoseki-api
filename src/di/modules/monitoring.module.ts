import { Module } from '@nestjs/common';
import { MonitoringController } from 'src/controller/monitoring.controller';

@Module({
  imports: [],
  controllers: [MonitoringController],
  providers: [],
})
export class MonitoringModule {}