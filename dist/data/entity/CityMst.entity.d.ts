import { BaseEntity } from 'typeorm';
export declare class CityMst extends BaseEntity {
    prefecture: string;
    prefName: string;
    city: string;
    cityName: string;
    activeImage: string;
    normalImage: string;
}
