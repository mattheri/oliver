import * as playwright from 'playwright';

import { FillFormArg } from './interfaces/browser.interfaces';

export class Form {
  private page: playwright.Page;

  constructor(page: playwright.Page) {
    this.page = page;
  }

  private async fillIn(selector: string, value: string) {
    await this.page.fill(selector, value);
  }

  /**
   * Fill in a form with the given values.
   * Keys are the form field names, values are the values to fill in.
   */
  async fill(form: FillFormArg) {
    for (const [key, value] of Object.entries(form)) {
      await this.fillIn(key, value);
    }

    return this;
  }

  /**
   * Submit the form.
   * If a selector is provided, click the element matching the selector.
   * Otherwise, press the Enter key.
   */
  async submit(selector?: string) {
    if (selector) {
      await this.page.click(selector);
    } else {
      await this.page.keyboard.press('Enter');
    }

    return this;
  }
}
