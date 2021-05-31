import { CityMstService } from '../service/cityMst.service';
import GetCityMstListResponse from './response/GetCityMstListResponse';
export declare class CityMstController {
    private readonly cityMstService;
    constructor(cityMstService: CityMstService);
    getCityMaster(): Promise<GetCityMstListResponse>;
}
