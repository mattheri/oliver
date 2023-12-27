import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Image } from '../models/image.model';
import { ImageDto } from '../dto/image.dto';
import { ImageService } from '../services/image.service';
import { ImageSize } from '../models/image-size.model';

@Resolver(() => Image)
export class ImageResolver {
  constructor(private readonly imageService: ImageService) {}

  @Query(() => Image)
  imageMetadata(@Args('input') input: ImageDto) {
    return this.imageService.getImageMetadata(input);
  }

  @ResolveField(() => ImageSize)
  async sizes(@Parent() image: Image) {
    return this.imageService.createImageSizes(image);
  }
}
