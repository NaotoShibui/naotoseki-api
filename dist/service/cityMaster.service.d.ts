import { Repository } from 'typeorm';
import { CityMaster } from '../data/entity/CityMaster.entity';
export declare class CityMasterService {
    private cityMasterRepository;
    constructor(cityMasterRepository: Repository<CityMaster>);
    findAll(): Promise<CityMaster[]>;
}
