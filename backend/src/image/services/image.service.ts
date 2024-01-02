import axios from 'axios';
import * as sharp from 'sharp';

import { Injectable } from '@nestjs/common';

import { ImageDto } from '../dto/image.dto';

@Injectable()
export class ImageService {
  private readonly http = axios.create({});

  async createImageSizes(input: ImageDto, sizes: number[] = [300, 600, 900]) {
    const { data } = await this.http.get<Buffer>(input.src, {
      responseType: 'arraybuffer',
    });

    const img = sharp(data);
    const metadata = await img.metadata();
    const promises = sizes.map(async (size) => {
      const width = size;
      const height = Math.floor((size / metadata.width) * metadata.height);

      return img
        .resize(width, height)
        .png({ quality: 0.92 })
        .toBuffer()
        .then((buffer) => ({ buffer, width, height }));
    });

    const buffers = await Promise.all(promises);

    return buffers.map((buffer) => ({
      width: buffer.width,
      height: buffer.height,
      src: buffer.buffer.toString('base64'),
    }));
  }

  async getImageMetadata(input: ImageDto) {
    const { data } = await this.http.get<Buffer>(input.src, {
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
