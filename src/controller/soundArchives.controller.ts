import { Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import PrefectureParam from './request/PrefectureParam';
import CityQuery from './request/CityQuery';
import SoundArchivesListOutVo from 'src/service/vo/SoundArchivesListOutVo';
import GetSoundArchivesListResponse from './response/GetSoundArchivesListResponse';
import { SoundArchivesService } from 'src/service/soundArchives.service';
import { CorsAllowInterceptor } from 'src/interceptor/cors.interceptor';

@Controller('sound-archives')
export class SoundArchivesController {
  constructor(private readonly soundArchivesService: SoundArchivesService) {}

  @Get(':prefecture')
  @UseInterceptors(CorsAllowInterceptor)
  async getSoundArchivesByCity(@Param() params: PrefectureParam, @Query() query: CityQuery): Promise<GetSoundArchivesListResponse> {
    try{
      const outVos: SoundArchivesListOutVo = await this.soundArchivesService.findByCity(params.prefecture, query.city);
      const response: GetSoundArchivesListResponse = plainToClass(GetSoundArchivesListResponse, outVos);
      return response;
    } catch(e) {
      console.log(e);
    }
  }
}
