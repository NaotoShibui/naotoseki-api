import { BaseEntity } from 'typeorm';
import { PlaceMstEntity } from './PlaceMst.entity';
export declare class CityMstEntity extends BaseEntity {
    prefecture: string;
    prefName: string;
    city: string;
    cityName: string;
    activeImage: string;
    normalImage: string;
    population: number;
    railway: string;
    cityCode: number;
    longitude: string;
    latitude: string;
    area: number;
    residentialLand: number;
    field: number;
    forest: number;
    wilderness: number;
    placeMst: PlaceMstEntity;
}
