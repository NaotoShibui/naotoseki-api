import { Exclude, Expose } from 'class-transformer';
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
}

Object.seal(GetPlaceMstResponse);
export default GetPlaceMstResponse;
