import CityMstOutVo from './CityMstOutVo';
import SoundArchivesOutVo from './SoundArchivesOutVo';
declare class PlaceMstOutVo {
    prefecture: string;
    city: string;
    place: string;
    placeName: string;
    pointRatioX: string;
    pointRatioY: string;
    soundArchives: SoundArchivesOutVo;
    cityMst: CityMstOutVo;
}
export default PlaceMstOutVo;
