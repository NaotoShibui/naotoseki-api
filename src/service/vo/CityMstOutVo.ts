import { Exclude, Expose } from 'class-transformer';

@Exclude()
class GetCityMstOutVo {
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

Object.seal(GetCityMstOutVo);
export default GetCityMstOutVo;
