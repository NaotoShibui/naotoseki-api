import { Repository } from 'typeorm';
import { CityMst } from '../data/entity/CityMst.entity';
export declare class CityMstService {
    private cityMstRepository;
    constructor(cityMstRepository: Repository<CityMst>);
    findAll(): Promise<CityMst[]>;
}
