"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
const playwright_1 = require("playwright");
class Browser {
    constructor() {
        this.launch();
    }
    async launch() {
        this.browser = await playwright_1.default.chromium.launch({
            headless: process.env.NODE_ENV === 'production',
            devtools: process.env.NODE_ENV !== 'production',
        });
    }
    end() {
        this.browser.close();
    }
    async newPage() {
        const context = await this.browser.newContext();
        const page = await context.newPage();
        return page;
    }
}
exports.Browser = Browser;
//# sourceMappingURL=browser.js.map