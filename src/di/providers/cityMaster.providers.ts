import { Connection, Repository } from 'typeorm';
import { CityMaster } from '../../data/entity/CityMaster.entity';

export const cityMasterProviders = [
  {
    provide: 'CITY_MASTER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(CityMaster),
    inject: ['DATABASE_CONNECTION'],
  },
];