/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateMovieDto {
  @IsString() // decorator
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true })
  readonly genres: string[];
}
