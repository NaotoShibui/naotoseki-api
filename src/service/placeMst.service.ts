import { Injectable, Inject } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { PlaceMstEntity } from '../data/entity/PlaceMst.entity';
import PlaceMstListOutVo from './vo/PlaceMstListOutVo';
import PlaceMstOutVo from './vo/PlaceMstOutVo';
import * as constants from '../constants';

@Injectable()
export class PlaceMstService {
  constructor(
    @Inject(constants.PLACE_MST_REPOSITORY)
    private placeMstRepository: Repository<PlaceMstEntity>,
  ) {}

  async findAll(): Promise<PlaceMstListOutVo> {
    try{
      const entities: PlaceMstEntity[] =  await this.placeMstRepository.createQueryBuilder(constants.PLACE_MST).getMany();
      const total: number = await this.getCount();

      let outVos: PlaceMstOutVo[] = [];
      entities.forEach(entity => {
        outVos.push(plainToClass(PlaceMstOutVo, entity));
      });
      const result: PlaceMstListOutVo = {
        total,
        results: outVos
      };
      return result;
    } catch(e) {
      console.log(e);
    }
  }

  async findByCity(prefecture: string, city: string): Promise<PlaceMstOutVo> {
    try{
      const query: SelectQueryBuilder<PlaceMstEntity> =  this.placeMstRepository.createQueryBuilder(constants.PLACE_MST)
        .select('place_mst.prefecture', 'prefecture')
        .addSelect('place_mst.city', 'city')
        .addSelect('place_mst.place', 'place')
        .addSelect('place_mst.place_name', 'placeName')
        .addSelect('place_mst.point_ratio_x', 'pointRatioX')
        .addSelect('place_mst.point_ratio_y', 'pointRatioY')
        .addSelect('sound_archives.title', 'title')
        .leftJoinAndSelect('place_mst.soundArchives', 'sound_archives')
        // .leftJoin('sound_archives', 'sound_archives', 'place_mst.prefecture = sound_archives.prefecture AND place_mst.city = sound_archives.city')
        .where(`${constants.PLACE_MST}.prefecture = :prefecture`, { prefecture })
        .andWhere(`${constants.PLACE_MST}.city = :city`, { city })
      
        console.log('=============== query');
        console.log(query.getSql());
        console.log('======================');

      const entity: PlaceMstEntity = await query.getOne();
      console.log('================== entity');
      console.log(entity);
      console.log('========================');

      const outVo: PlaceMstOutVo = plainToClass(PlaceMstOutVo, entity);
      return outVo;
    } catch(e) {
      console.log(e);
    }
  }

  async getCount(): Promise<number> {
    return await this.placeMstRepository.createQueryBuilder(constants.PLACE_MST).getCount();
  }
}