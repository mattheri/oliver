import { ImageDto } from '../dto/image.dto';
export declare class ImageService {
    private readonly http;
    getImageMetadata(input: ImageDto): Promise<{
        src: string;
        alt: string;
        width: number;
        height: number;
    }>;
}
