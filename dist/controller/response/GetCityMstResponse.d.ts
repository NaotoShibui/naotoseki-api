import GetSoundArchivesResponse from './GetSoundArchivesResponse';
declare class GetCityMstResponse {
    prefecture: string;
    prefName: string;
    city: string;
    cityName: string;
    activeImage: string;
    normalImage: string;
    population: number;
    railway: string;
    cityCode: number;
    longitude: string;
    latitude: string;
    area: number;
    residentialLand: number;
    field: number;
    forest: number;
    wilderness: number;
    soundArchives: GetSoundArchivesResponse[];
}
export default GetCityMstResponse;
