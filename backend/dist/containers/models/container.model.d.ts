import { BoxCategory } from './container-category.model';
import { ContainerItem } from './container-item';
export declare class Box {
    id: string;
    name: string;
    description?: string;
    main?: boolean;
    category: BoxCategory;
    created: Date;
    updated: Date;
    allowView: string[];
    allowEdit: string[];
    allowDelete: string[];
    owner: string;
    items: ContainerItem[];
}
