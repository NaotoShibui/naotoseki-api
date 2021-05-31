import { Exclude, Expose } from 'class-transformer';
import GetCityMstOutVo from './CityMstOutVo';

@Exclude()
class GetCityMstLustOutVo {
  @Expose()
  total: number;

  @Expose()
  results: GetCityMstOutVo[];
}

Object.seal(GetCityMstLustOutVo);
export default GetCityMstLustOutVo;
