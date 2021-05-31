import { BaseEntity } from 'typeorm';
export declare class CityMstEntity extends BaseEntity {
    prefecture: string;
    prefName: string;
    city: string;
    cityName: string;
    activeImage: string;
    normalImage: string;
}
