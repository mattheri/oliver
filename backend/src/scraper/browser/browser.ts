import playwright from 'playwright';

export class Browser {
  private browser: playwright.Browser;

  constructor() {
    this.launch();
  }

  private async launch() {
    this.browser = await playwright.chromium.launch({
      headless: process.env.NODE_ENV === 'production',
      devtools: process.env.NODE_ENV !== 'production',
    });
  }

  public end() {
    this.browser.close();
  }

  public async newPage() {
    const context = await this.browser.newContext();
    const page = await context.newPage();
    return page;
  }
}
