import { Injectable, Inject, Query } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { SoundArchivesEntity } from '../data/entity/SoundArchives.entity';
import * as constants from '../constants';
import SoundArchivesOutVo from './vo/SoundArchivesOutVo';
import SoundArchivesListOutVo from './vo/SoundArchivesListOutVo';

@Injectable()
export class SoundArchivesService {
  constructor(
    @Inject(constants.SOUND_ARCHIVES_REPOSITORY)
    private soundArchivesRepository: Repository<SoundArchivesEntity>,
  ) {}

  async findByCity(prefecture: string, city: string): Promise<SoundArchivesListOutVo> {
    try{
      const entities: SoundArchivesEntity[] =  await this.soundArchivesRepository.createQueryBuilder(constants.SOUND_ARCHIVES)
        .where(`${constants.PLACE_MST}.prefecture = :prefecture`, { prefecture })
        .andWhere(`${constants.PLACE_MST}.city = :city`, { city })
        .getMany();
  
      console.log('================= entity');
      console.log(entities);
      console.log('========================');

      let outVos: SoundArchivesOutVo[] = [];
      entities.forEach(entity => {
        outVos.push(plainToClass(SoundArchivesOutVo, entity));
      });
      
      const total = await this.getCount();
      const result: SoundArchivesListOutVo = {
        total,
        results: outVos
      }

      console.log('================= result');
      console.log(result);
      console.log('========================');
      
      
      return result;
    } catch(e) {
      console.log(e);
    }
  }

  async getCount(prefecture: string = '', city: string = ''): Promise<number> {
    const query: SelectQueryBuilder<SoundArchivesEntity> = this.soundArchivesRepository.createQueryBuilder(constants.SOUND_ARCHIVES);
    if(prefecture != ''){
      query.where(`${constants.PLACE_MST}.prefecture = :prefecture`, { prefecture });
      if(city != '') query.andWhere(`${constants.PLACE_MST}.city = :city`, { city });
    }

    return await query.getCount();
  }
}