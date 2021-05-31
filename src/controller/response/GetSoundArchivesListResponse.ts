import { Exclude, Expose } from 'class-transformer';
import GetSoundArchivesResponse from './GetSoundArchivesResponse';

@Exclude()
class GetSoundArchivesListResponse {
  @Expose()
  total: number;
  
  @Expose()
  results: GetSoundArchivesResponse[];
}

Object.seal(GetSoundArchivesListResponse);
export default GetSoundArchivesListResponse;
