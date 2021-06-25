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
  population: number;

  @Expose()
  railway: string;

  @Expose()
  cityCode: number;

  @Expose()
  longitude: string;

  @Expose()
  latitude: string;

  @Expose()
  area: number;

  @Expose()
  residentialLand: number;

  @Expose()
  field: number;

  @Expose()
  forest: number;

  @Expose()
  wilderness: number;

  @Expose()
  soundArchives: GetSoundArchivesResponse[];
}

Object.seal(GetCityMstResponse);
export default GetCityMstResponse;
