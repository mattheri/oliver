import axios from 'axios';
import * as sharp from 'sharp';

import { Injectable } from '@nestjs/common';

import { ImageDto } from '../dto/image.dto';

@Injectable()
export class ImageService {
  private readonly http = axios.create({});

  async getImageMetadata(input: ImageDto) {
    const { data } = await this.http.get(input.src, {
      responseType: 'arraybuffer',
    });

    const img = sharp(data);
    const metadata = await img.metadata();

    return {
      src: input.src,
      alt: input.alt,
      width: metadata.width,
      height: metadata.height,
    };
  }
}
