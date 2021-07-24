import { Exclude, Expose } from 'class-transformer';

@Exclude()
class GetSoundArchivesResponse {
  @Expose()
  id: string;

  @Expose()
  title: string;
  
  @Expose()
  prefecture: string;

  @Expose()
  city: string;
  
  @Expose()
  place: string;
  
  @Expose()
  recordingDate: Date;
  
  @Expose()
  downloadLink: string;
  
  @Expose()
  fileLength: string;

  @Expose()
  description: string;

  @Expose()
  isNormalized: boolean;

  @Expose()
  isNoiseReducted: boolean;

  @Expose()
  isRepaired: boolean;
}

Object.seal(GetSoundArchivesResponse);
export default GetSoundArchivesResponse;
