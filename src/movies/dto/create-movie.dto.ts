/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString() // decorator
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true })
  readonly genres: string[];
}
