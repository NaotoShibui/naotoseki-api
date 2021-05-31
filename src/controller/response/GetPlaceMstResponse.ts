import { Exclude, Expose } from 'class-transformer';

@Exclude()
class GetPlaceMstResponse {
  @Expose()
  prefecture: string;

  @Expose()
  city: string;

  @Expose()
  place: string;

  @Expose()
  place_name: string;

  @Expose()
  point_ratio_x: number;

  @Expose()
  point_ratio_y: number;
}

Object.seal(GetPlaceMstResponse);
export default GetPlaceMstResponse;
