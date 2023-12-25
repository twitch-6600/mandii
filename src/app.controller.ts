import { Controller, Get, Redirect } from '@nestjs/common';
import { URL } from './constant';

@Controller()
export class AppController {
  constructor() {}

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

  @Redirect(URL.SHORTS, 301)
  @Get('shorts')
  shorts(): boolean {
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

  @Redirect(URL.GOODS, 301)
  @Get('goods')
  goods(): boolean {
    return true;
  }

  @Redirect(URL.MUSIC, 301)
  @Get('music')
  music(): boolean {
    return true;
  }

  @Redirect(URL.SONG, 301)
  @Get('song')
  song(): boolean {
    return true;
  }

  @Redirect(URL.FANCIM, 301)
  @Get('fancim')
  fancim(): boolean {
    return true;
  }

  @Redirect(URL.CHZZK, 301)
  @Get('chzzk')
  chzzk(): boolean {
    return true;
  }

  @Redirect(URL.CHZZK, 301)
  @Get('%EC%B9%98%EC%A7%80%EC%A7%81') // '치지직'
  chzzkKo(): boolean {
    return true;
  }
}
