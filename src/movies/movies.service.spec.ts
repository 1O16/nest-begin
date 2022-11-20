/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

// unit 테스트 - function 하나하나를 따로 실행하는 것 : 서비스에서 분리된 유닛을 테스트
// end-to-end(e2e) 테스트 - 모든 시스템을 테스트하는 것 : 사용자가 서비스를 사용하는 것 처럼 테스트
