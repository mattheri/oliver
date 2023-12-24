import { DatabaseService } from 'src/db/services/db.service';
import { AddContainerItemDto } from '../dto/add-container-item.dto';
import { GetContainerItemByIdDto } from '../dto/get-container-item-by-id.dto';
import { UpdateContainerItemDto } from '../dto/update-container-item.dto';
export declare class ContainerService {
    private readonly db;
    constructor(db: DatabaseService);
    getContainerById(id: string): Promise<{
        id: string;
        name: string;
        description: string;
        ownerId: string;
        created: Date;
        updated: Date;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
    }>;
    getContainersByUserEmail(email: string): Promise<{
        id: string;
        name: string;
        description: string;
        ownerId: string;
        created: Date;
        updated: Date;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
    }[]>;
    getContainersByUserId(id: string): Promise<{
        id: string;
        name: string;
        description: string;
        ownerId: string;
        created: Date;
        updated: Date;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
    }[]>;
    getContainerItemsByContainerId(id: string): Promise<{
        id: string;
        containerId: string;
        linkedItemId: string;
        quantity: number;
        name: string;
        value: string;
        code: number;
        imageUrl: string;
        created: Date;
        updated: Date;
    }[]>;
    addContainerItem(input: AddContainerItemDto): Promise<{
        id: string;
        containerId: string;
        linkedItemId: string;
        quantity: number;
        name: string;
        value: string;
        code: number;
        imageUrl: string;
        created: Date;
        updated: Date;
    }>;
    updateContainerItem(input: UpdateContainerItemDto): Promise<{
        id: string;
        containerId: string;
        linkedItemId: string;
        quantity: number;
        name: string;
        value: string;
        code: number;
        imageUrl: string;
        created: Date;
        updated: Date;
    }>;
    containerItemIsGroceryItem(input: GetContainerItemByIdDto): Promise<{
        list: {
            id: string;
            name: string;
            description: string;
            ownerId: string;
            created: Date;
            updated: Date;
            allowView: string;
            allowEdit: string;
            allowDelete: string;
        };
    } & {
        id: string;
        name: string;
        value: string;
        code: number;
        imageUrl: string;
        quantity: number;
        listId: string;
        created: Date;
        updated: Date;
    }>;
}
