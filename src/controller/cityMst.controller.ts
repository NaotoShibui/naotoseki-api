import { Controller, Get } from '@nestjs/common';
import { CityMstService } from '../service/cityMst.service';

@Controller('city')
export class CityMstController {
  constructor(private readonly cityMstService: CityMstService) {}

  @Get()
  getCityMaster(): any {
    return this.cityMstService.findAll();
  }
}
