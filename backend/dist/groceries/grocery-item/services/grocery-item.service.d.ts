import { DatabaseService } from 'src/db/services/db.service';
import { CreateGroceryItemDto } from '../dto/create-grocery-item.dto';
import { DeleteGroceryItemDto } from '../dto/delete-grocery-item.dto';
import { GetGroceryItemByIdDto } from '../dto/get-grocery-item-by-id.dto';
import { GetGroceryItemByListIdDto } from '../dto/get-grocery-item-by-list-id.dto';
import { UpdateGroceryItemDto } from '../dto/update-grocery-item.dto';
import { GroceryItem } from '../models/grocery-item.model';
export declare class GroceryItemService {
    private readonly db;
    constructor(db: DatabaseService);
    getGroceryItemsByListId(input: GetGroceryItemByListIdDto): Promise<GroceryItem[]>;
    getGroceryItemById(input: GetGroceryItemByIdDto): Promise<GroceryItem>;
    createGroceryItem(input: CreateGroceryItemDto): Promise<GroceryItem>;
    createGroceryItemBulk(input: CreateGroceryItemDto[]): Promise<GroceryItem[]>;
    updateGroceryItem(id: string, input: UpdateGroceryItemDto): Promise<GroceryItem>;
    updateGroceryItemBulk(input: UpdateGroceryItemDto[]): Promise<GroceryItem[]>;
    deleteGroceryItem(input: DeleteGroceryItemDto): Promise<GroceryItem>;
    deleteGroceryItemBulk(input: DeleteGroceryItemDto[]): Promise<void>;
}
