import { PlaceMstService } from '../service/placeMst.service';
import GetPlaceMstListResponse from './response/GetPlaceMstListResponse';
import PrefectureParam from './request/PrefectureParam';
import PlaceInfoQuery from './request/PlaceInfoQuery';
import GetPlaceMstResponse from './response/GetPlaceMstResponse';
export declare class PlaceMstController {
    private readonly placeMstService;
    constructor(placeMstService: PlaceMstService);
    getCityMst(): Promise<GetPlaceMstListResponse>;
    getCityMstByPrefecture(params: PrefectureParam, placeInfo: PlaceInfoQuery): Promise<GetPlaceMstResponse>;
}
