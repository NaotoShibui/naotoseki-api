import { BaseEntity } from 'typeorm';
export declare class PlaceMstEntity extends BaseEntity {
    prefecture: string;
    city: string;
    place: string;
    placeName: string;
    pointRatioX: number;
    pointRatioY: number;
}
