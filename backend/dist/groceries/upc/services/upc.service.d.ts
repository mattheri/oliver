import { Item } from '../models/item.model';
export declare class UpcService {
    private readonly upcApiUrl;
    private readonly upcCache;
    private readonly http;
    private apiItemToItem;
    getUpc(upc: string): Promise<Item>;
}
