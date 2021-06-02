import { Exclude, Expose } from 'class-transformer';
import GetCityMstResponse from './GetCityMstResponse';
import GetSoundArchivesResponse from './GetSoundArchivesResponse';

@Exclude()
class GetPlaceMstResponse {
  @Expose()
  prefecture: string;

  @Expose()
  city: string;

  @Expose()
  place: string;

  @Expose()
  placeName: string;

  @Expose()
  pointRatioX: number;

  @Expose()
  pointRatioY: number;

  @Expose()
  soundArchives: GetSoundArchivesResponse;

  @Expose()
  cityMst: GetCityMstResponse;
}

Object.seal(GetPlaceMstResponse);
export default GetPlaceMstResponse;
