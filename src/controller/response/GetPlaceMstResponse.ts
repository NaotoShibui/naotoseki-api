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
  placeName: string;

  @Expose()
  pointRatioX: number;

  @Expose()
  pointRatioY: number;
}

Object.seal(GetPlaceMstResponse);
export default GetPlaceMstResponse;
