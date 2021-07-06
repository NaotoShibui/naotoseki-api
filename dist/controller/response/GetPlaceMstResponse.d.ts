import GetCityMstResponse from './GetCityMstResponse';
import GetSoundArchivesResponse from './GetSoundArchivesResponse';
declare class GetPlaceMstResponse {
    prefecture: string;
    city: string;
    place: string;
    placeName: string;
    pointRatioX: number;
    pointRatioY: number;
    soundArchives: GetSoundArchivesResponse;
    cityMst: GetCityMstResponse;
}
export default GetPlaceMstResponse;
