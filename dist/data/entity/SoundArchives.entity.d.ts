import { BaseEntity } from 'typeorm';
import { CityMstEntity } from './CityMst.entity';
export declare class SoundArchivesEntity extends BaseEntity {
    title: string;
    prefecture: string;
    city: string;
    place: string;
    recordingDate: Date;
    downloadLink: string;
    fileLength: string;
    description: string;
    isNormalized: boolean;
    isNoiseReducted: boolean;
    isRepaired: boolean;
    cityMst?: CityMstEntity;
}
