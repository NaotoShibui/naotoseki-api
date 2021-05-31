import { Controller, Get, Param, Query } from '@nestjs/common';
import { PlaceMstService } from '../service/placeMst.service';
import { plainToClass } from 'class-transformer';
import PlaceMstListOutVo from 'src/service/vo/PlaceMstListOutVo';
import GetPlaceMstListResponse from './response/GetPlaceMstListResponse';
import PrefectureParam from './request/PrefectureParam';
import PlaceInfoQuery from './request/PlaceInfoQuery';
import PlaceMstOutVo from 'src/service/vo/PlaceMstOutVo';
import GetPlaceMstResponse from './response/GetPlaceMstResponse';

@Controller('place')
export class PlaceMstController {
  constructor(private readonly placeMstService: PlaceMstService) {}

  @Get()
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
  async getCityMstByPrefecture(@Param() params: PrefectureParam, @Query() placeInfo: PlaceInfoQuery): Promise<GetPlaceMstResponse> {
    try{
      const outVo: PlaceMstOutVo = await this.placeMstService.findByCity(params.prefecture, placeInfo.city, placeInfo.place);
      const response: GetPlaceMstResponse = plainToClass(GetPlaceMstResponse, outVo);
      return response;
    } catch(e) {
      console.log(e);
    }
  }
}
