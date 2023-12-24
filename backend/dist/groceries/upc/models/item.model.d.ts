import { Category } from './category.model';
import { Spec } from './spec.model';
export declare class Item {
    code: string;
    name: string;
    brand: string;
    description: string;
    image?: string;
    specs: Spec[];
    category: Category;
    codeUrl?: string;
}
