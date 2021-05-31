import { Connection, Repository } from 'typeorm';
import { PlaceMstEntity } from '../../data/entity/PlaceMst.entity';
export declare const placeMstProviders: {
    provide: string;
    useFactory: (connection: Connection) => Repository<PlaceMstEntity>;
    inject: string[];
}[];
