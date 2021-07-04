import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { CorsAllowInterceptor } from 'src/interceptor/cors.interceptor';

@Controller('monitoring')
export class MonitoringController {
  @Get()
  @UseInterceptors(CorsAllowInterceptor)
  async monitoring(): Promise<string> {
    try{
      return 'alive';
    } catch(e) {
      console.log(e);
    }
  }
}
