import { Exclude, Expose } from 'class-transformer';
import SoundArchivesOutVo from './SoundArchivesOutVo';

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

  @Expose()
  soundArchives: SoundArchivesOutVo;
}

Object.seal(PlaceMstOutVo);
export default PlaceMstOutVo;
