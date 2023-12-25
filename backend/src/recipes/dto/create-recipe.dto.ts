import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

import { Field, InputType, OmitType } from '@nestjs/graphql';

import { CreateRecipeImageDto } from './create-recipe-image.dto';

@InputType()
export class CreateRecipeWithUserIdDto {
  @Field()
  @IsString()
  title: string;

  @Field(() => [String], { nullable: true, defaultValue: [] })
  @IsString({ each: true })
  @Transform(({ value }) => {
    if (Array.isArray(value)) {
      return value.map((v: string) => v.trim()).join(',');
    }
    return value;
  })
  ingredients: string;

  @Field(() => [String], { nullable: true, defaultValue: [] })
  @IsString({ each: true })
  @Transform(({ value }) => {
    if (Array.isArray(value)) {
      return value.map((v: string) => v.trim()).join(',');
    }
    return value;
  })
  instructions: string;

  @Field()
  @IsString()
  userId: string;

  @Field(() => CreateRecipeImageDto, { nullable: true })
  @IsOptional()
  @IsObject()
  image?: CreateRecipeImageDto;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  isExternalSrc?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  url?: string;

  @Field(() => [String], { nullable: true, defaultValue: [] })
  @IsOptional()
  @IsEmail({}, { each: true })
  @Transform(({ value }) => {
    if (Array.isArray(value)) {
      return value.map((v: string) => v.trim()).join(',');
    }
    return value;
  })
  allowView: string;

  @Field(() => [String], { nullable: true, defaultValue: [] })
  @IsOptional()
  @IsEmail({}, { each: true })
  @Transform(({ value }) => {
    if (Array.isArray(value)) {
      return value.map((v: string) => v.trim()).join(',');
    }
    return value;
  })
  allowEdit: string;

  @Field(() => [String], { nullable: true, defaultValue: [] })
  @IsOptional()
  @IsEmail({}, { each: true })
  @Transform(({ value }) => {
    if (Array.isArray(value)) {
      return value.map((v: string) => v.trim()).join(',');
    }
    return value;
  })
  allowDelete: string;
}

@InputType()
export class CreateRecipeDto extends OmitType(CreateRecipeWithUserIdDto, [
  'userId',
] as const) {}
