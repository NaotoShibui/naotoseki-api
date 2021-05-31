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
  point_ratio_x: string;
  
  @Expose()
  point_ratio_y: string;
}

Object.seal(PlaceMstOutVo);
export default PlaceMstOutVo;
