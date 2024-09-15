import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';  // Import MongooseModule
import { AudioController } from '../../controller/audio/audio.controller';
import { AudioService } from '../../service/audio.service';
import { AudioRepo } from '../../repo/audio/audio.repo'; // Đảm bảo đường dẫn chính xác
import { AudioSchema } from '../../model/audio/audio.model';  // Import AudioSchema

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Audio', schema: AudioSchema }]), // Đăng ký schema Audio
  ],
  controllers: [AudioController],
  providers: [AudioService, AudioRepo],
  exports: [AudioService], 
})
export class AudioModule {}
