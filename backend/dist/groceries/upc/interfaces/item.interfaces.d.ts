export type ApiItem = {
    code: string;
    codeType: string;
    product: Product;
    barcodeUrl: string;
    inferred: boolean;
};
export type Product = {
    name: string;
    description: string;
    region: string;
    imageUrl: string;
    brand: string;
    specs: Array<string[]>;
    category: string;
    categoryPath: string[];
    upc: number;
    ean: number;
};
