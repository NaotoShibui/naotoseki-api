import { Connection, Repository } from 'typeorm';
import { SoundArchivesEntity } from '../../data/entity/SoundArchives.entity';
export declare const soundArchivesProviders: {
    provide: string;
    useFactory: (connection: Connection) => Repository<SoundArchivesEntity>;
    inject: string[];
}[];
