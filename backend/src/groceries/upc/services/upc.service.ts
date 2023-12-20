import axios from 'axios';

import { Injectable } from '@nestjs/common';

import { ApiItem } from '../interfaces/item.interfaces';
import { Item } from '../models/item.model';
import { upcApiUrl } from '../upc.constants';

@Injectable()
export class UpcService {
  private readonly upcApiUrl = upcApiUrl;
  private readonly upcCache = new Map<string, Item>();
  private readonly http = axios.create({
    headers: {
      Authorization: `Bearer ${process.env.UPC_API_KEY}`,
    },
    baseURL: this.upcApiUrl,
  });

  private apiItemToItem(apiItem: ApiItem): Item {
    const { product } = apiItem;

    const item: Item = {
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

  async getUpc(upc: string) {
    try {
      if (this.upcCache.has(upc)) {
        return this.upcCache.get(upc);
      }

      const { data } = await this.http.get<ApiItem>(upc);

      const item = this.apiItemToItem(data);

      this.upcCache.set(upc, item);

      return item;
    } catch (e) {
      return null;
    }
  }
}
