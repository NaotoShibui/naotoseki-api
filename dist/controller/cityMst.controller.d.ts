import { CityMstService } from '../service/cityMst.service';
import GetCityMstListResponse from './response/GetCityMstListResponse';
import PrefectureParam from './request/PrefectureParam';
import GetCityMstResponse from './response/GetCityMstResponse';
export declare class CityMstController {
    private readonly cityMstService;
    constructor(cityMstService: CityMstService);
    getCityMst(): Promise<GetCityMstListResponse>;
    getCityMstByPrefecture(params: PrefectureParam): Promise<GetCityMstListResponse>;
    getCityByCity(params: PrefectureParam): Promise<GetCityMstResponse>;
}
