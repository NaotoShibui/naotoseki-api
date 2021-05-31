import { Repository } from 'typeorm';
import { CityMst } from '../data/entity/CityMst.entity';
import CityMstListOutVo from './vo/CityMstListOutVo';
export declare class CityMstService {
    private cityMstRepository;
    constructor(cityMstRepository: Repository<CityMst>);
    findAll(): Promise<CityMstListOutVo>;
    getCount(): Promise<number>;
}
