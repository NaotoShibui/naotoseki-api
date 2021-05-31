import { Repository } from 'typeorm';
import { SoundArchivesEntity } from '../data/entity/SoundArchives.entity';
import SoundArchivesListOutVo from './vo/SoundArchivesListOutVo';
export declare class SoundArchivesService {
    private soundArchivesRepository;
    constructor(soundArchivesRepository: Repository<SoundArchivesEntity>);
    findByCity(prefecture: string, city: string): Promise<SoundArchivesListOutVo>;
    getCount(prefecture?: string, city?: string): Promise<number>;
}
