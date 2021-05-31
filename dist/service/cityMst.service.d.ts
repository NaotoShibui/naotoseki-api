import { Repository } from 'typeorm';
import { CityMstEntity } from '../data/entity/CityMst.entity';
import CityMstListOutVo from './vo/CityMstListOutVo';
import CityMstOutVo from './vo/CityMstOutVo';
export declare class CityMstService {
    private cityMstRepository;
    constructor(cityMstRepository: Repository<CityMstEntity>);
    findAll(): Promise<CityMstListOutVo>;
    findByPrefecture(prefecture: string): Promise<CityMstListOutVo>;
    findByCity(prefecture: string, city: string): Promise<CityMstOutVo>;
    getCount(prefecture?: string): Promise<number>;
}
