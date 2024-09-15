
import { Injectable } from '@nestjs/common';
import { AudioRepo } from '../repo/audio/audio.repo';
import { CreateAudioDto } from '../request/audio';
import { ReturnNotFoundException } from '../../nmd_core/common/utils/custom.error';

@Injectable()
export class AudioService {
  constructor(private readonly audioRepo: AudioRepo) {}

  // Lấy tất cả các audio
  async findAll() {
    return await this.audioRepo.findAll();
  }

  // Lấy audio theo ID
  async findOne(id: string) {
    const audio = await this.audioRepo.findOne(id);
    if (!audio) throw ReturnNotFoundException('Audio not found.'); 
    return audio;
  }

  // Tạo mới một audio
  async create(createAudioDto: CreateAudioDto) {
    const newAudio = await this.audioRepo.create(createAudioDto);
    return newAudio;
  }


}
