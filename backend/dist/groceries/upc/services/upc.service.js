"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpcService = void 0;
const axios_1 = require("axios");
const common_1 = require("@nestjs/common");
const upc_constants_1 = require("../upc.constants");
let UpcService = class UpcService {
    constructor() {
        this.upcApiUrl = upc_constants_1.upcApiUrl;
        this.upcCache = new Map();
        this.http = axios_1.default.create({
            headers: {
                Authorization: `Bearer ${process.env.UPC_API_KEY}`,
            },
            baseURL: this.upcApiUrl,
        });
    }
    apiItemToItem(apiItem) {
        const { product } = apiItem;
        const item = {
            code: String(product.upc),
            name: product.name,
            brand: product.brand,
            description: product.description,
            specs: product.specs.map(([name, value]) => ({
                name,
                value,
            })),
            category: {
                mainCategory: product.category,
                categories: product.categoryPath,
            },
        };
        if (product.imageUrl) {
            item.image = product.imageUrl;
        }
        if (apiItem.barcodeUrl) {
            item.codeUrl = apiItem.barcodeUrl;
        }
        return item;
    }
    async getUpc(upc) {
        try {
            if (this.upcCache.has(upc)) {
                return this.upcCache.get(upc);
            }
            const { data } = await this.http.get(upc);
            const item = this.apiItemToItem(data);
            this.upcCache.set(upc, item);
            return item;
        }
        catch (e) {
            return null;
        }
    }
};
UpcService = __decorate([
    (0, common_1.Injectable)()
], UpcService);
exports.UpcService = UpcService;
//# sourceMappingURL=upc.service.js.map