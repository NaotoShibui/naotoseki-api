import { Controller, Get } from '@nestjs/common';
import { CityMasterService } from '../service/cityMaster.service';

@Controller('city')
export class CityMasterController {
  constructor(private readonly cityMasterService: CityMasterService) {}

  @Get()
  getCityMaster(): any {
    return this.cityMasterService.findAll();
  }
}
