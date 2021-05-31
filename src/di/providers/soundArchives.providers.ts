import { Connection, Repository } from 'typeorm';
import { SoundArchivesEntity } from '../../data/entity/SoundArchives.entity';
import * as constants from '../../constants';

export const soundArchivesProviders = [
  {
    provide: constants.SOUND_ARCHIVES_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(SoundArchivesEntity),
    inject: [constants.DATABASE_CONNECTION],
  },
];