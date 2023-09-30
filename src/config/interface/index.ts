export const EnvToken = {
  PORT: 'PORT',
} as const;

export class IEnv implements Record<keyof typeof EnvToken, any> {
  PORT: number;
}
