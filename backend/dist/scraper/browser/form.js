"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
class Form {
    constructor(page) {
        this.page = page;
    }
    async fillIn(selector, value) {
        await this.page.fill(selector, value);
    }
    async fill(form) {
        for (const [key, value] of Object.entries(form)) {
            await this.fillIn(key, value);
        }
        return this;
    }
    async submit(selector) {
        if (selector) {
            await this.page.click(selector);
        }
        else {
            await this.page.keyboard.press('Enter');
        }
        return this;
    }
}
exports.Form = Form;
//# sourceMappingURL=form.js.map