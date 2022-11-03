import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

// 데코레이터 - 클래스에 함수 기능을 추가(클래스 위의 함수), 데코레이터와 함수 사이에 공백이 있으면 안됌
@Module({
  imports: [],
  controllers: [MoviesController], // url을 가져와서 함수를 실행시킴
  providers: [],
})
export class AppModule {}
