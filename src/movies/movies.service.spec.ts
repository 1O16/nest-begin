/* eslint-disable prettier/prettier */
import { NotFoundException } from '@nestjs/common';
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

  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array); // 기대값인 instance가 해당 클래스에 속하는지 test
    });
  });

  describe('getOne', () => {
    it('should return a movie', () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2022,
      });

      const movie = service.getOne(1);
      expect(movie).toBeDefined(); // property에 movie가 있는지
      expect(movie.id).toEqual(1); // movie의 id가 1인지
    });
    it('should throw 404 error', () => {
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie with ID 999 not found.');
      }
    });
  });
});

// 테스트하고 싶은 파일은 파일명에 .spec.ts를 붙이면 됌
// unit 테스트 - function 하나하나를 따로 실행하는 것 : 서비스에서 분리된 유닛을 테스트
// end-to-end(e2e) 테스트 - 모든 시스템을 테스트하는 것 : 사용자가 서비스를 사용하는 것 처럼 테스트
