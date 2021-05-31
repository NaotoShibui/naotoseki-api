import { Injectable, Inject } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { CityMst } from '../data/entity/CityMst.entity';
import CityMstListOutVo from './vo/CityMstListOutVo';
import CityMstOutVo from './vo/CityMstOutVo';


@Injectable()
export class CityMstService {
  constructor(
    @Inject('CITY_MST_REPOSITORY')
    private cityMstRepository: Repository<CityMst>,
  ) {}

  async findAll(): Promise<CityMstListOutVo> {
    try{
      const entities: CityMst[] =  await this.cityMstRepository.createQueryBuilder("city_mst").getMany();
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

  async getCount(): Promise<number> {
    const total: number = await this.cityMstRepository.createQueryBuilder("city_mst").getCount();
    return total;
  }
}