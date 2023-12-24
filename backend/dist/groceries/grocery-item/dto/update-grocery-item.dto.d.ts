import { CreateGroceryItemDto } from './create-grocery-item.dto';
declare const UpdateGroceryItemDto_base: import("@nestjs/common").Type<Partial<CreateGroceryItemDto>>;
export declare class UpdateGroceryItemDto extends UpdateGroceryItemDto_base {
    id: string;
    name?: string;
    value?: string;
    code?: number;
    quantity?: number;
}
export {};
