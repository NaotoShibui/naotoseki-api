import { Exclude, Expose } from 'class-transformer';
import GetPlaceMstResponse from './GetPlaceMstResponse';

@Exclude()
class GetPlaceMstListResponse {
  @Expose()
  total: number;
  
  @Expose()
  results: GetPlaceMstResponse[];
}

Object.seal(GetPlaceMstListResponse);
export default GetPlaceMstListResponse;
