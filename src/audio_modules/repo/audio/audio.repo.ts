import { Injectable } from '@nestjs/common';
 // Đảm bảo import từ @nestjs/mongoose
import { Model } from 'mongoose';
import { AudioModel } from '../../model/audio/audio.model';
import { CreateAudioDto } from '../../request'; 

@Injectable()
export class AudioRepo {
  constructor( private readonly audioModel: Model<AudioModel>) {}

  async findAll(): Promise<AudioModel[]> {

      return await this.audioModel.find().exec(); 
   
  }

  async findOne(id: string): Promise<AudioModel | null> {

      return await this.audioModel.findById(id).exec(); 
   
  }

  async create(createAudioDto: CreateAudioDto): Promise<AudioModel> {
 
      const newAudio = new this.audioModel(createAudioDto);
      return await newAudio.save(); 
   
  }
}
