import { BaseEntity } from 'typeorm';
import { CityMstEntity } from './CityMst.entity';
import { SoundArchivesEntity } from './SoundArchives.entity';
export declare class PlaceMstEntity extends BaseEntity {
    prefecture: string;
    city: string;
    place: string;
    placeName: string;
    pointRatioX: number;
    pointRatioY: number;
    soundArchives: SoundArchivesEntity[];
    cityMst: CityMstEntity;
}
