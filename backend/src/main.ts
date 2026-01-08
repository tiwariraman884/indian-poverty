import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors({
    origin: ['http://localhost:5173', 'https://*.gov.in'],
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  
  const apiPrefix = configService.get('API_PREFIX') || 'v1';
  app.setGlobalPrefix(apiPrefix);

  const port = configService.get('PORT') || 3000;
  await app.listen(port);

  console.log(`🚀 SAMPARK Stack™ API: http://localhost:${port}/${apiPrefix}`);
}

bootstrap();
