import { Exclude, Expose } from 'class-transformer';
import GetCityMstOutVo from './CityMstOutVo';

@Exclude()
class CityMstListOutVo {
  @Expose()
  total: number;

  @Expose()
  results: GetCityMstOutVo[];
}

Object.seal(CityMstListOutVo);
export default CityMstListOutVo;
