import { Controller, Get, Param } from '@nestjs/common';
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
  async getCityMstByPrefecture(@Param() params: PrefectureParam): Promise<GetCityMstListResponse> {
    try{
      const outVos: GetCityMstListOutVo = await this.cityMstService.findByPrefecture(params.prefecture);
      const response:GetCityMstListResponse = plainToClass(GetCityMstListResponse, outVos);
      return response;
    } catch(e) {
      console.log(e);
    }
  }

  @Get(':prefecture/:city')
  async getCityByCity(@Param() params: PrefectureParam): Promise<GetCityMstResponse> {
    try {
      const outVo: GetCityMstOutVo = await this.cityMstService.findByCity(params.prefecture, params.city);
      console.log('================ outVo');
      console.log(outVo);
      console.log('=======================');
      const response: GetCityMstResponse = plainToClass(GetCityMstResponse, outVo);
      return response;
    } catch(e) {
      console.log(e);
    }
    
  }
}
