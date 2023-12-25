import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

import { UpdateRecipeImageDto } from './update-recipe-image.dto';

@InputType()
export class UpdateRecipeDto {
  @Field()
  @IsString()
  id: string;

  @Field()
  @IsString()
  @IsOptional()
  title?: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @Transform(({ value }) => {
    if (Array.isArray(value)) {
      return value.map((v: string) => v.trim()).join(',');
    }
    return value;
  })
  ingredients?: string;

  @Field(() => [String], { nullable: true })
  @IsString({ each: true })
  @Transform(({ value }) => {
    if (Array.isArray(value)) {
      return value.map((v: string) => v.trim()).join(',');
    }
    return value;
  })
  instructions?: string;

  @Field(() => UpdateRecipeImageDto, { nullable: true })
  @IsOptional()
  @IsObject()
  image?: UpdateRecipeImageDto;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  isExternalSrc?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  url?: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsEmail({}, { each: true })
  @Transform(({ value }) => {
    if (Array.isArray(value)) {
      return value.map((v: string) => v.trim()).join(',');
    }
    return value;
  })
  allowView?: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsEmail({}, { each: true })
  @Transform(({ value }) => {
    if (Array.isArray(value)) {
      return value.map((v: string) => v.trim()).join(',');
    }
    return value;
  })
  allowEdit?: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsEmail({}, { each: true })
  @Transform(({ value }) => {
    if (Array.isArray(value)) {
      return value.map((v: string) => v.trim()).join(',');
    }
    return value;
  })
  allowDelete?: string;
}
