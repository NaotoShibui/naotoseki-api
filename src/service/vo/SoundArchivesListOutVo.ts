import { Exclude, Expose } from 'class-transformer';
import SoundArchivesOutVo from './SoundArchivesOutVo';

@Exclude()
class SoundArchivesListOutVo {
  @Expose()
  total: number;

  @Expose()
  results: SoundArchivesOutVo[];
}

Object.seal(SoundArchivesListOutVo);
export default SoundArchivesListOutVo;
