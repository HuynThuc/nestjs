export class CreateAudioDto {
    audioId: string;
    slug: string;
    audioSrc: string;
    name: string;
    level?: string;
    duration: number;
    durationText: string;
    artWorkUrl: string;
    totalViewed: number;
    description?: string;
    isCharacterAudio: boolean;
    isNumbersAudio: boolean;
    youtubeVideoId?: string;
  }
  