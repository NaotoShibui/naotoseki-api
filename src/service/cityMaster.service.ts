import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CityMaster } from '../data/entity/CityMaster.entity';

@Injectable()
export class CityMasterService {
  constructor(
    @Inject('CITY_MASTER_REPOSITORY')
    private cityMasterRepository: Repository<CityMaster>,
  ) {}

  async findAll(): Promise<CityMaster[]> {
    return this.cityMasterRepository.find();
  }
}