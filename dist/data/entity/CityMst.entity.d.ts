import { BaseEntity } from 'typeorm';
import { SoundArchivesEntity } from './SoundArchives.entity';
export declare class CityMstEntity extends BaseEntity {
    prefecture: string;
    prefName: string;
    city: string;
    cityName: string;
    activeImage: string;
    normalImage: string;
    soundArchives: SoundArchivesEntity[];
}
