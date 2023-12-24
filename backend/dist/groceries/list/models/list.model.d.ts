import { GroceryItem } from '../../grocery-item/models/grocery-item.model';
export declare class List {
    id: string;
    allowEdit: string[];
    allowView: string[];
    allowDelete: string[];
    owner: string;
    name: string;
    description: string;
    created: Date;
    updated: Date;
    items: GroceryItem[];
}
declare const ListWithoutItems_base: import("@nestjs/common").Type<Omit<List, "items">>;
export declare class ListWithoutItems extends ListWithoutItems_base {
}
export {};
