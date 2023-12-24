import * as playwright from 'playwright';
import { MonitorRequestsArgs } from './interfaces/browser.interfaces';
export declare class NetworkInterceptor {
    static Browser: {
        new (browser: playwright.Browser): {
            browser: playwright.Browser;
        };
    };
    static Page: {
        new (page: playwright.Page): {
            page: playwright.Page;
            reponse: Promise<playwright.Response> | null;
            waitForResponse(urlOrPredicate: string | RegExp | ((response: playwright.Response) => boolean | Promise<boolean>), options?: {
                timeout?: number;
            }): any;
            getAwaitingResponse(): Promise<any>;
            unpackResponse<T>(response: Promise<playwright.Response>): Promise<T>;
            onRequest(callback: (request: playwright.Request) => void): any;
            onResponse(callback: (response: playwright.Response) => void): any;
            monitorRequests({ requestsCallback, responseCallback, }: MonitorRequestsArgs): any;
        };
    };
}
