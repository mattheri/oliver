import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Image } from '../models/image.model';
import { ImageDto } from '../dto/image.dto';
import { ImageService } from '../services/image.service';
import { ImageSize } from '../models/image-size.model';
import { ImageSizeDto } from '../dto/image-size.dto';

@Resolver(() => Image)
export class ImageResolver {
  constructor(private readonly imageService: ImageService) {}

  @Query(() => Image)
  async imageMetadata(@Args('input') input: ImageDto) {
    return this.imageService.getImageMetadata(input);
  }

  @Query(() => [ImageSize])
  async imageSizes(@Args('input') { sizes, ...image }: ImageSizeDto) {
    return this.imageService.createImageSizes(image, sizes);
  }

  @ResolveField(() => ImageSize)
  async sizes(@Parent() image: Image) {
    return this.imageService.createImageSizes(image);
  }
}
