import { Controller, Get, Param, Header } from '@nestjs/common';
import { CityMstService } from '../service/cityMst.service';
import { plainToClass } from 'class-transformer';
import GetCityMstListOutVo from 'src/service/vo/CityMstListOutVo';
import GetCityMstListResponse from './response/GetCityMstListResponse';
import PrefectureParam from './request/PrefectureParam';
import GetCityMstResponse from './response/GetCityMstResponse';
import GetCityMstOutVo from 'src/service/vo/CityMstOutVo';

@Controller('city')
export class CityMstController {
  constructor(private readonly cityMstService: CityMstService) {}

  @Get()
  async getCityMst(): Promise<GetCityMstListResponse> {
    try{
      const outVos: GetCityMstListOutVo = await this.cityMstService.findAll();
      const response:GetCityMstListResponse = plainToClass(GetCityMstListResponse, outVos);
      return response;
    } catch(e) {
      console.log(e);
    }
  }

  @Get(':prefecture')
  @Header('Access-Control-Allow-Origin', 'http://localhost:8080')
  async getCityMstByPrefecture(@Param() params: PrefectureParam): Promise<GetCityMstListResponse> {
    try{
      const outVos: GetCityMstListOutVo = await this.cityMstService.findByPrefecture(params.prefecture);
      const response:GetCityMstListResponse = plainToClass(GetCityMstListResponse, outVos);
      return response;
    } catch(e) {
      console.log(e);
    }
  }
}
