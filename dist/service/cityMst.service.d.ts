import { Repository } from 'typeorm';
import { CityMstEntity } from '../data/entity/CityMst.entity';
import CityMstListOutVo from './vo/CityMstListOutVo';
export declare class CityMstService {
    private cityMstRepository;
    constructor(cityMstRepository: Repository<CityMstEntity>);
    findAll(): Promise<CityMstListOutVo>;
    findByPrefecture(prefecture: string): Promise<CityMstListOutVo>;
    getCount(prefecture?: string): Promise<number>;
}
