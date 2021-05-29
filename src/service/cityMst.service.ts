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
    return this.cityMstRepository.find();
  }
}