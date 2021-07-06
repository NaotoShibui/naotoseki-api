import { Repository } from 'typeorm';
import { PlaceMstEntity } from '../data/entity/PlaceMst.entity';
import PlaceMstListOutVo from './vo/PlaceMstListOutVo';
export declare class PlaceMstService {
    private placeMstRepository;
    constructor(placeMstRepository: Repository<PlaceMstEntity>);
    findAll(): Promise<PlaceMstListOutVo>;
    findByCity(prefecture: string, city: string): Promise<PlaceMstListOutVo>;
    getCount(): Promise<number>;
}
