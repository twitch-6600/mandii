import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [],
  exports: [ConfigModule],
})
export class AppModule {}
