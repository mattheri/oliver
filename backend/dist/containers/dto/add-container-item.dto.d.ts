import { CreateGroceryItemDto } from 'src/groceries/grocery-item/dto/create-grocery-item.dto';
declare const AddContainerItemDto_base: import("@nestjs/common").Type<Partial<Omit<CreateGroceryItemDto, "name" | "listId">>>;
export declare class AddContainerItemDto extends AddContainerItemDto_base {
    containerId: string;
    name: string;
    linkedItemId?: string;
}
export {};
