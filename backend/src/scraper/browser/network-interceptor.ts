import * as playwright from 'playwright';

import { MonitorRequestsArgs } from './interfaces/browser.interfaces';

export class NetworkInterceptor {
  static Browser = class {
    browser: playwright.Browser;

    constructor(browser: playwright.Browser) {
      this.browser = browser;
    }
  };

  static Page = class {
    page: playwright.Page;
    reponse: Promise<playwright.Response> | null = null;

    constructor(page: playwright.Page) {
      this.page = page;
    }

    waitForResponse(...args: Parameters<playwright.Page['waitForResponse']>) {
      this.reponse = this.page.waitForResponse(...args);

      return this;
    }

    async getAwaitingResponse() {
      if (!this.reponse) throw new Error('No response was intercepted');
      await this.reponse;

      return this;
    }

    async unpackResponse<T>(
      response: Promise<playwright.Response>,
    ): Promise<T> {
      const json = await (await response).json();

      return json as T;
    }

    onRequest(callback: (request: playwright.Request) => void) {
      this.page.on('request', callback);

      return this;
    }

    onResponse(callback: (response: playwright.Response) => void) {
      this.page.on('response', callback);

      return this;
    }

    monitorRequests({
      requestsCallback,
      responseCallback,
    }: MonitorRequestsArgs) {
      if (requestsCallback) this.onRequest(requestsCallback);
      if (responseCallback) this.onResponse(responseCallback);

      return this;
    }
  };
}
