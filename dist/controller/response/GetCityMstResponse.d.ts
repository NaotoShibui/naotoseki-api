import GetSoundArchivesResponse from './GetSoundArchivesResponse';
declare class GetCityMstResponse {
    prefecture: string;
    prefName: string;
    city: string;
    cityName: string;
    activeImage: string;
    normalImage: string;
    soundArchives: GetSoundArchivesResponse[];
}
export default GetCityMstResponse;
