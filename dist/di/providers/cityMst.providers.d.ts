import { Connection, Repository } from 'typeorm';
import { CityMstEntity } from '../../data/entity/CityMst.entity';
export declare const cityMstProviders: {
    provide: string;
    useFactory: (connection: Connection) => Repository<CityMstEntity>;
    inject: string[];
}[];
