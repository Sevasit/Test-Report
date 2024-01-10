import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders:
      'Access-Control-Allow-Credentials, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  app.useGlobalFilters;
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.setGlobalPrefix('/api/v1');
  await app.listen(8080);
  console.log('Server is running on port 8080');
}
bootstrap();
