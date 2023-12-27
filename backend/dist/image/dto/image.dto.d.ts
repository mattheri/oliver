import { ImageSizeDto } from './image-size.dto';
export declare class ImageDto {
    src: string;
    width?: number;
    height?: number;
    alt?: string;
    sizes?: ImageSizeDto[];
}
