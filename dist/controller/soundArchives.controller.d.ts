import PrefectureParam from './request/PrefectureParam';
import CityQuery from './request/CityQuery';
import GetSoundArchivesListResponse from './response/GetSoundArchivesListResponse';
import { SoundArchivesService } from 'src/service/soundArchives.service';
export declare class SoundArchivesController {
    private readonly soundArchivesService;
    constructor(soundArchivesService: SoundArchivesService);
    getSoundArchivesByCity(params: PrefectureParam, query: CityQuery): Promise<GetSoundArchivesListResponse>;
}
