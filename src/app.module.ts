import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres', // データベースタイプ
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT, // ポート番号は数値である必要があるため、+記号を使用して変換
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // 開発用途に限ります。本番環境では使用しないでください。
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, TypeOrmModule, JwtModule],
})
export class AppModule {}
