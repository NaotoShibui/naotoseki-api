import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { CityMstService } from '../service/cityMst.service';
import { plainToClass } from 'class-transformer';
import GetCityMstListOutVo from 'src/service/vo/CityMstListOutVo';
import GetCityMstListResponse from './response/GetCityMstListResponse';
import PrefectureParam from './request/PrefectureParam';
import GetCityMstResponse from './response/GetCityMstResponse';
import GetCityMstOutVo from 'src/service/vo/CityMstOutVo';
import { CorsAllowInterceptor } from 'src/interceptor/cors.interceptor';

@Controller('city')
export class CityMstController {
  constructor(private readonly cityMstService: CityMstService) {}

  @Get()
  @UseInterceptors(CorsAllowInterceptor)
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
  @UseInterceptors(CorsAllowInterceptor)
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
  @UseInterceptors(CorsAllowInterceptor)
  async getCityMstByCity(@Param() params: PrefectureParam): Promise<GetCityMstResponse> {
    try{
      const outVos: GetCityMstOutVo = await this.cityMstService.findByCity(params.prefecture, params.city);
      const response:GetCityMstResponse = plainToClass(GetCityMstResponse, outVos);
      return response;
    } catch(e) {
      console.log(e);
    }
  }
}
