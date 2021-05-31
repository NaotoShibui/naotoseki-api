import { Exclude, Expose } from 'class-transformer';

@Exclude()
class PlaceMstOutVo {
  @Expose()
  prefecture: string;
  
  @Expose()
  city: string;
  
  @Expose()
  place: string;
  
  @Expose()
  placeName: string;
  
  @Expose()
  pointRatioX: string;
  
  @Expose()
  pointRatioY: string;
}

Object.seal(PlaceMstOutVo);
export default PlaceMstOutVo;
