import { Injectable, Inject } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { CityMstEntity } from '../data/entity/CityMst.entity';
import CityMstListOutVo from './vo/CityMstListOutVo';
import CityMstOutVo from './vo/CityMstOutVo';
import * as constants from '../constants';

@Injectable()
export class CityMstService {
  constructor(
    @Inject(constants.CITY_MST_REPOSITORY)
    private cityMstRepository: Repository<CityMstEntity>,
  ) {}

  async findAll(): Promise<CityMstListOutVo> {
    try{
      const entities: CityMstEntity[] =  await this.cityMstRepository.createQueryBuilder(constants.CITY_MST).getMany();
      const total: number = await this.getCount();

      let outVos: CityMstOutVo[] = [];
      entities.forEach(entity => {
        outVos.push(plainToClass(CityMstOutVo, entity));
      });
      const result: CityMstListOutVo = {
        total,
        results: outVos
      };
      return result;
    } catch(e) {
      console.log(e);
    }
  }

  async findByPrefecture(prefecture: string): Promise<CityMstListOutVo> {
    try{
      const entities: CityMstEntity[] =  await this.cityMstRepository.createQueryBuilder(constants.CITY_MST)
        .where(`${constants.CITY_MST}.prefecture = :prefecture`, { prefecture })
        .orderBy('city_code', 'ASC')
        .getMany();
      const total: number = await this.getCount(prefecture);

      let outVos: CityMstOutVo[] = [];
      entities.forEach(entity => {
        outVos.push(plainToClass(CityMstOutVo, entity));
      });
      const result: CityMstListOutVo = {
        total,
        results: outVos
      };
      return result;
    } catch(e) {
      console.log(e);
    }
  }

  async findByCity(prefecture: string, city: string): Promise<CityMstOutVo> {
    try{
      const entity: CityMstEntity =  await this.cityMstRepository.createQueryBuilder(constants.CITY_MST)
        .where(`${constants.CITY_MST}.prefecture = :prefecture`, { prefecture })
        .andWhere(`${constants.CITY_MST}.city = :city`, { city })
        .getOne();

      let outVo: CityMstOutVo = plainToClass(CityMstOutVo, entity);
      
      return outVo;
    } catch(e) {
      console.log(e);
    }
  }

  async getCount(prefecture: string = ''): Promise<number> {
    const query = this.cityMstRepository.createQueryBuilder(constants.CITY_MST);
    if(prefecture != '')  query.where(`${constants.CITY_MST}.prefecture = :prefecture`, { prefecture });
    const total = await query.getCount();

    return total;
  }
}