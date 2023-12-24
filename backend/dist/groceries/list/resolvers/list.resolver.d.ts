import { List, ListWithoutItems } from '../models/list.model';
import { ListService } from '../services/list.service';
import { AddReadonlyUserListDto } from '../dto/add-readonly-user-list.dto';
import { CreateListDto } from '../dto/create-list.dto';
import { GroceryItemService } from 'src/groceries/grocery-item/services/grocery-item.service';
import { User } from '@prisma/client';
import { GetListByIdDto } from '../dto/get-list-by-id.dto';
export declare class ListResolver {
    private readonly listService;
    private readonly groceryItemService;
    constructor(listService: ListService, groceryItemService: GroceryItemService);
    list(input: GetListByIdDto): Promise<ListWithoutItems>;
    lists(user?: User): Promise<ListWithoutItems[]>;
    createList(input: CreateListDto, user: User): Promise<List>;
    addReadOnlyUserToList(input: AddReadonlyUserListDto): Promise<ListWithoutItems>;
    items(list: List): Promise<import("../../grocery-item/models/grocery-item.model").GroceryItem[]>;
}
