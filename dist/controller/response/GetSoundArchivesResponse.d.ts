declare class GetSoundArchivesResponse {
    title: string;
    prefecture: string;
    city: string;
    place: string;
    recordingDate: Date;
    downloadLink: string;
    fileLength: string;
    description: string;
    isNormalized: boolean;
    isNoiseReducted: boolean;
    isRepaired: boolean;
}
export default GetSoundArchivesResponse;
