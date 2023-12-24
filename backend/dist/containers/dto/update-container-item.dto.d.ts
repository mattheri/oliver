import { CreateGroceryItemDto } from 'src/groceries/grocery-item/dto/create-grocery-item.dto';
declare const UpdateContainerItemDto_base: import("@nestjs/common").Type<Partial<Omit<CreateGroceryItemDto, "listId">>>;
export declare class UpdateContainerItemDto extends UpdateContainerItemDto_base {
    id: string;
    linkedItemId?: string;
}
export {};
