import { IsInt, IsOptional, IsString, Min, ValidateIf } from 'class-validator';

import { Field, InputType, Int } from '@nestjs/graphql';

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

  @Field(() => [Int], { nullable: true, defaultValue: [300, 600, 900] })
  @IsOptional()
  @ValidateIf((o) => o.sizes !== undefined)
  @IsInt({ each: true })
  sizes?: number[];
}
