import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvToken } from './config/interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = app.get(EnvToken.PORT);
  await app.listen(port);
}
bootstrap();
