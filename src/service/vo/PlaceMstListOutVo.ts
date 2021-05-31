import { Exclude, Expose } from 'class-transformer';
import PlaceMstOutVo from './PlaceMstOutVo';

@Exclude()
class PlaceMstListOutVo {
  @Expose()
  total: number;

  @Expose()
  results: PlaceMstOutVo[];
}

Object.seal(PlaceMstListOutVo);
export default PlaceMstListOutVo;
