import playwright from 'playwright';
export declare class Browser {
    private browser;
    constructor();
    private launch;
    end(): void;
    newPage(): Promise<playwright.Page>;
}
