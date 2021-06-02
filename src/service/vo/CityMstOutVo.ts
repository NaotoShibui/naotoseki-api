import { Exclude, Expose } from 'class-transformer';

@Exclude()
class CityMstOutVo {
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

Object.seal(CityMstOutVo);
export default CityMstOutVo;
