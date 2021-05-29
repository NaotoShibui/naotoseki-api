import { Connection, Repository } from 'typeorm';
import { CityMst } from '../../data/entity/CityMst.entity';

export const cityMstProviders = [
  {
    provide: 'CITY_MST_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(CityMst),
    inject: ['DATABASE_CONNECTION'],
  },
];