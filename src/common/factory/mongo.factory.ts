import { ConfigService } from '@nestjs/config';

export default async (configService: ConfigService) => {
  const type = configService.get<string>('TYPE_MONGO');
  const username = configService.get<string>('USERNAME_MONGO');
  const password = configService.get<string>('USERNAME_MONGO');
  const host = configService.get<string>('HOST_MONGO');
  const port = configService.get<string>('PORT_MONGO');
  const database = configService.get<string>('DATABASE_MONGO');

  return {
    uri: `${type}://${username}:${password}@${host}:${port}/${database}?authSource=admin`,
  };
};
