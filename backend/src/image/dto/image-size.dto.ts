import { IsOptional, IsString, Min, ValidateIf } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ImageSizeDto {
  @Field({ nullable: true })
  @IsOptional()
  @ValidateIf((o) => o.width !== undefined)
  @Min(1)
  width?: number;

  @Field({ nullable: true })
  @IsOptional()
  @ValidateIf((o) => o.height !== undefined)
  @Min(1)
  height?: number;

  @Field()
  @IsString()
  src: string;
}
