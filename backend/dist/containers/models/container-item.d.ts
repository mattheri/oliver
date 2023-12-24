import { GroceryItem } from 'src/groceries/grocery-item/models/grocery-item.model';
declare const ContainerItem_base: import("@nestjs/common").Type<Omit<GroceryItem, "id" | "quantity" | "listId">>;
export declare class ContainerItem extends ContainerItem_base {
    id: string;
    quantity: number;
}
export {};
