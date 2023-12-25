import { InputType, PartialType } from '@nestjs/graphql';

import { CreateRecipeImageDto } from './create-recipe-image.dto';

@InputType()
export class UpdateRecipeImageDto extends PartialType(CreateRecipeImageDto) {}
