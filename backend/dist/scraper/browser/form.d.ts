import * as playwright from 'playwright';
import { FillFormArg } from './interfaces/browser.interfaces';
export declare class Form {
    private page;
    constructor(page: playwright.Page);
    private fillIn;
    fill(form: FillFormArg): Promise<this>;
    submit(selector?: string): Promise<this>;
}
