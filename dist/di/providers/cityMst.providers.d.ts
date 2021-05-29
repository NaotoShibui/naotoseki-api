import { Connection, Repository } from 'typeorm';
import { CityMst } from '../../data/entity/CityMst.entity';
export declare const cityMstProviders: {
    provide: string;
    useFactory: (connection: Connection) => Repository<CityMst>;
    inject: string[];
}[];
