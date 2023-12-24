"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkInterceptor = void 0;
class NetworkInterceptor {
}
exports.NetworkInterceptor = NetworkInterceptor;
NetworkInterceptor.Browser = class {
    constructor(browser) {
        this.browser = browser;
    }
};
NetworkInterceptor.Page = class {
    constructor(page) {
        this.reponse = null;
        this.page = page;
    }
    waitForResponse(...args) {
        this.reponse = this.page.waitForResponse(...args);
        return this;
    }
    async getAwaitingResponse() {
        if (!this.reponse)
            throw new Error('No response was intercepted');
        await this.reponse;
        return this;
    }
    async unpackResponse(response) {
        const json = await (await response).json();
        return json;
    }
    onRequest(callback) {
        this.page.on('request', callback);
        return this;
    }
    onResponse(callback) {
        this.page.on('response', callback);
        return this;
    }
    monitorRequests({ requestsCallback, responseCallback, }) {
        if (requestsCallback)
            this.onRequest(requestsCallback);
        if (responseCallback)
            this.onResponse(responseCallback);
        return this;
    }
};
//# sourceMappingURL=network-interceptor.js.map