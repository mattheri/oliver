export declare class HashService {
    private readonly hasher;
    private _saltOrRounds;
    get saltOrRounds(): number;
    set saltOrRounds(value: number);
    hash(str: string): Promise<string>;
    compare(str: string, hash: string): Promise<boolean>;
}
