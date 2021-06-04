import { Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';
import { PlaceMstService } from '../service/placeMst.service';
import { plainToClass } from 'class-transformer';
import PlaceMstListOutVo from 'src/service/vo/PlaceMstListOutVo';
import GetPlaceMstListResponse from './response/GetPlaceMstListResponse';
import PrefectureParam from './request/PrefectureParam';
import PlaceInfoQuery from './request/PlaceInfoQuery';
import PlaceMstOutVo from 'src/service/vo/PlaceMstOutVo';
import GetPlaceMstResponse from './response/GetPlaceMstResponse';
import { CorsAllowInterceptor } from 'src/interceptor/cors.interceptor';

@Controller('place')
export class PlaceMstController {
  constructor(private readonly placeMstService: PlaceMstService) {}

  @Get()
  @UseInterceptors(CorsAllowInterceptor)
  async getCityMst(): Promise<GetPlaceMstListResponse> {
    try{
      const outVos: PlaceMstListOutVo = await this.placeMstService.findAll();
      const response: GetPlaceMstListResponse = plainToClass(GetPlaceMstListResponse, outVos);
      return response;
    } catch(e) {
      console.log(e);
    }
  }

  @Get(':prefecture')
  @UseInterceptors(CorsAllowInterceptor)
  async getCityMstByPrefecture(@Param() params: PrefectureParam, @Query() placeInfo: PlaceInfoQuery): Promise<GetPlaceMstListResponse> {
    try{
      const outVo: PlaceMstListOutVo = await this.placeMstService.findByCity(params.prefecture, placeInfo.city);
      const response: GetPlaceMstListResponse = plainToClass(GetPlaceMstListResponse, outVo);
      return response;
    } catch(e) {
      console.log(e);
    }
  }
}
