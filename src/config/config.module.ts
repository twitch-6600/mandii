import { config } from 'dotenv';
import { DynamicModule, Module } from '@nestjs/common';
import { IEnv } from './interface';

@Module({})
export class ConfigModule {
  static forRoot(): DynamicModule {
    config({
      path: (() => {
        switch (process.env.NODE_ENV) {
          default:
            return `.env`;
        }
      })(),
      override: false,
    })?.parsed;

    const env: IEnv = {
      PORT: Number(process.env.PORT) ?? 3000,
    } as const;

    return {
      module: ConfigModule,
      providers: [
        ...Object.entries(env).map(([key, value]) => ({
          provide: key,
          useValue: value,
        })),
      ],
      exports: [...Object.keys(env)],
    };
  }
}
