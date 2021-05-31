import { Exclude, Expose } from 'class-transformer';
import GetCityMstResponse from './GetCityMstResponse';

@Exclude()
class GetCityMstListResponse {
  @Expose()
  total: number;
  
  @Expose()
  results: GetCityMstResponse[];
}

Object.seal(GetCityMstListResponse);
export default GetCityMstListResponse;
