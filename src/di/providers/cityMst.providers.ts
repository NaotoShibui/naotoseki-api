import { Connection, Repository } from 'typeorm';
import { CityMstEntity } from '../../data/entity/CityMst.entity';
import * as constants from '../../constants';

export const cityMstProviders = [
  {
    provide: constants.CITY_MST_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(CityMstEntity),
    inject: [constants.DATABASE_CONNECTION],
  },
];