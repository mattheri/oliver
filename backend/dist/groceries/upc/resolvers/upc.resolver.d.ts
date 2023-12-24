import { Item } from '../models/item.model';
import { UpcService } from '../services/upc.service';
import { ItemByUpcDto } from '../dto/item-by-upc.dto';
export declare class UpcResolver {
    private upcService;
    constructor(upcService: UpcService);
    itemByUpc(input: ItemByUpcDto): Promise<Item>;
}
