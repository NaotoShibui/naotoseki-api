import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CityMst } from '../data/entity/CityMst.entity';

@Injectable()
export class CityMstService {
  constructor(
    @Inject('CITY_MST_REPOSITORY')
    private cityMstRepository: Repository<CityMst>,
  ) {}

  async findAll(): Promise<CityMst[]> {
    try{
      return this.cityMstRepository.createQueryBuilder("city_mst")
        .getMany();
    } catch(e) {
      console.log(e);
    }
  }
}