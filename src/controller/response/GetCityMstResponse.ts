import { Exclude, Expose } from 'class-transformer';

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
}

Object.seal(GetCityMstResponse);
export default GetCityMstResponse;
