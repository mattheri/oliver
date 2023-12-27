import { Image } from '../models/image.model';
import { ImageDto } from '../dto/image.dto';
import { ImageService } from '../services/image.service';
export declare class ImageResolver {
    private readonly imageService;
    constructor(imageService: ImageService);
    imageMetadata(input: ImageDto): Promise<{
        src: string;
        alt: string;
        width: number;
        height: number;
    }>;
    sizes(image: Image): Promise<{
        width: number;
        height: number;
        src: string;
    }[]>;
}
