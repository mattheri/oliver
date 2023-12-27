import { Resolver, Query, Args } from '@nestjs/graphql';
import { Image } from '../models/image.model';
import { ImageDto } from '../dto/image.dto';
import { ImageService } from '../services/image.service';

@Resolver(() => Image)
export class ImageResolver {
  constructor(private readonly imageService: ImageService) {}

  @Query(() => Image)
  imageMetadata(@Args('input') input: ImageDto) {
    return this.imageService.getImageMetadata(input);
  }
}
