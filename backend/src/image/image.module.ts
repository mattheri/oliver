import { Module } from '@nestjs/common';

import { ImageResolver } from './resolvers/image.resolver';
import { ImageService } from './services/image.service';

@Module({
  providers: [ImageService, ImageResolver],
  exports: [ImageService],
})
export class ImageModule {}
