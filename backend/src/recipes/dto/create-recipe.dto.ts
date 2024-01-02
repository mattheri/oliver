import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsObject,
  IsOptional,
  IsString,
  Min,
  ValidateIf,
} from 'class-validator';

import { Field, InputType, Int, OmitType } from '@nestjs/graphql';

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

  @Field(() => Int, { nullable: true })
  @IsInt()
  @ValidateIf((o) => o.servings !== null)
  @IsOptional()
  @Min(1)
  servings?: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  prepTime?: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  cookTime?: number;

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

  @Field({ defaultValue: false, nullable: true })
  @IsOptional()
  @IsBoolean()
  isWishList?: boolean;
}

@InputType()
export class CreateRecipeDto extends OmitType(CreateRecipeWithUserIdDto, [
  'userId',
] as const) {}
