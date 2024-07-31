// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTOに定義されていないプロパティを除外
      forbidNonWhitelisted: true, // ホワイトリストにないプロパティがある場合エラーを投げる
      transform: true, // リクエストをDTOインスタンスに変換
    }),
  );
  await app.listen(3000);
}
bootstrap();
