import { Controller, Get, Post, Body, Param, HttpCode, } from '@nestjs/common';
import { AudioService } from '../../service/audio.service';
import { CreateAudioDto } from '../../request/audio';

@Controller('audio')
export class AudioController {
  constructor(private readonly audioService: AudioService) {}

  @Get()
  async findAll() {
    return this.audioService.findAll();
  }

  @Post('/create')
  @HttpCode(200)
  async create(@Body() createAudioDto: CreateAudioDto) {
    return this.audioService.create(createAudioDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.audioService.findOne(id);
  }
}
