import { ImageDto } from '../dto/image.dto';
export declare class ImageService {
    private readonly http;
    createImageSizes(input: ImageDto, sizes?: number[]): Promise<{
        width: number;
        height: number;
        src: string;
    }[]>;
    getImageMetadata(input: ImageDto): Promise<{
        src: string;
        alt: string;
        width: number;
        height: number;
    }>;
}
