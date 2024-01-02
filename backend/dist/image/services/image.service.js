"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageService = void 0;
const axios_1 = require("axios");
const sharp = require("sharp");
const common_1 = require("@nestjs/common");
let ImageService = class ImageService {
    constructor() {
        this.http = axios_1.default.create({});
    }
    async createImageSizes(input, sizes = [300, 600, 900]) {
        const { data } = await this.http.get(input.src, {
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
    async getImageMetadata(input) {
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
};
ImageService = __decorate([
    (0, common_1.Injectable)()
], ImageService);
exports.ImageService = ImageService;
//# sourceMappingURL=image.service.js.map