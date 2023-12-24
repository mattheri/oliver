import { DatabaseService } from 'src/db/services/db.service';
import { User } from '@prisma/client';
import { AddReadonlyUserListDto } from '../dto/add-readonly-user-list.dto';
import { CreateListDto } from '../dto/create-list.dto';
import { List, ListWithoutItems } from '../models/list.model';
export declare class ListService {
    private readonly db;
    constructor(db: DatabaseService);
    private dbItemToModel;
    private dbListWithoutItemsToModel;
    private dbListToModel;
    getListById(id: string): Promise<ListWithoutItems>;
    getListsByUserId(userId: string): Promise<ListWithoutItems[]>;
    createList(input: CreateListDto, user?: User): Promise<List>;
    addReadOnlyUserToList(input: AddReadonlyUserListDto): Promise<Omit<List, 'items'>>;
    addManyReadOnlyUsersToList(input: AddReadonlyUserListDto[], user?: User): Promise<Omit<List, 'items'>>;
}
