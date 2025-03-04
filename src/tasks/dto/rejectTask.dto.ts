import { IsDate, IsString } from 'class-validator';

export class RejectTaskDto {
  @IsString()
  readonly id: string;
  @IsString()
  readonly processBy: string;
  @IsString()
  readonly annotation: string;
}
