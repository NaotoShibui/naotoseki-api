import { Exclude, Expose } from 'class-transformer';
import GetSoundArchivesResponse from './GetSoundArchivesResponse';

@Exclude()
class GetCityMstResponse {
  @Expose()
  prefecture: string;
  
  @Expose()
  prefName: string;
  
  @Expose()
  city: string;

  @Expose()
  cityName: string;

  @Expose()
  activeImage: string;

  @Expose()
  normalImage: string;

  @Expose()
  soundArchives: GetSoundArchivesResponse[];
}

Object.seal(GetCityMstResponse);
export default GetCityMstResponse;
