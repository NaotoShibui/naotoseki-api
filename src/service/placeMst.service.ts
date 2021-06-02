import { Injectable, Inject } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
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
      const entity: PlaceMstEntity =  await this.placeMstRepository.createQueryBuilder(constants.PLACE_MST)
        .leftJoinAndSelect('city_mst.placeMst', 'city_mst')
        .leftJoinAndSelect('place_mst.soundArchives', 'sound_archives')
        .where(`${constants.PLACE_MST}.prefecture = :prefecture`, { prefecture })
        .andWhere(`${constants.PLACE_MST}.city = :city`, { city })
        .getOne();

        console.log('================ entity');
        console.log(entity);
        console.log('=========================');

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