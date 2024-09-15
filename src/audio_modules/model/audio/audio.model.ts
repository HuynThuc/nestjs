import { Schema, model, Document } from 'mongoose';

export interface AudioModel extends Document {
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

const AudioSchema = new Schema({
  audioId: { type: String, required: true },
  slug: { type: String, required: true },
  audioSrc: { type: String, required: true },
  name: { type: String, required: true },
  level: { type: String, default: '' },
  duration: { type: Number, required: true },
  durationText: { type: String, required: true },
  artWorkUrl: { type: String, required: true },
  totalViewed: { type: Number, required: true },
  description: { type: String, default: '' },
  isCharacterAudio: { type: Boolean, required: true },
  isNumbersAudio: { type: Boolean, required: true },
  youtubeVideoId: { type: String, default: '' },
});


export { AudioSchema };
export const Audio = model<AudioModel>('Audio', AudioSchema);
