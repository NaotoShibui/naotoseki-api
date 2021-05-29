import { Connection, Repository } from 'typeorm';
import { CityMaster } from '../../data/entity/CityMaster.entity';
export declare const cityMasterProviders: {
    provide: string;
    useFactory: (connection: Connection) => Repository<CityMaster>;
    inject: string[];
}[];
