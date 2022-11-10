/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 아무 decorator도 없는 property는 거름
      forbidNonWhitelisted: true, // 누군가 이상한 것을 보내면 request 자체를 막음
      transform: true, // 유저들이 보낸 것을 우리가 원하는 타입으로 변환
    }),
  );
  await app.listen(3000);
}
bootstrap();
