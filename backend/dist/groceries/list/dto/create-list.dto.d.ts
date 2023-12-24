import { GroceryItem } from 'src/groceries/grocery-item/models/grocery-item.model';
export declare class CreateListDto {
    name: string;
    description?: string;
    owner: string;
    items: GroceryItem[];
    allowEdit?: string[];
    allowView?: string[];
    allowDelete?: string[];
}
