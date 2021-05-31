import { Controller, Get } from '@nestjs/common';
import { CityMstService } from '../service/cityMst.service';
import { plainToClass } from 'class-transformer';
import GetCityMstListOutVo from 'src/service/vo/CityMstListOutVo';
import GetCityMstListResponse from './response/GetCityMstListResponse';

@Controller('city')
export class CityMstController {
  constructor(private readonly cityMstService: CityMstService) {}

  @Get()
  async getCityMaster(): Promise<GetCityMstListResponse> {
    try{
      const outVos: GetCityMstListOutVo = await this.cityMstService.findAll();
      const response:GetCityMstListResponse = plainToClass(GetCityMstListResponse, outVos);
      return response;
    } catch(e) {
      console.log(e);
    }
  }
}
