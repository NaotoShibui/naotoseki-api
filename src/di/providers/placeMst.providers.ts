import { Connection, Repository } from 'typeorm';
import { PlaceMstEntity } from '../../data/entity/PlaceMst.entity';
import * as constants from '../../constants';

export const placeMstProviders = [
  {
    provide: constants.PLACE_MST_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(PlaceMstEntity),
    inject: [constants.DATABASE_CONNECTION],
  },
];