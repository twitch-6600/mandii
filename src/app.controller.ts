import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { URL } from './constant';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Redirect(URL.TWITCH, 301)
  @Get()
  main(): boolean {
    return true;
  }

  @Redirect(URL.YOUTUBE, 301)
  @Get('youtube')
  youtube(): boolean {
    return true;
  }

  @Redirect(URL.YOUTUBE_FULL, 301)
  @Get('youtube-full')
  youtubeFull(): boolean {
    return true;
  }

  @Redirect(URL.CAFE, 301)
  @Get('cafe')
  cafe(): boolean {
    return true;
  }
}
