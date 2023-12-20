import * as playwright from 'playwright';

export type FillFormArg = {
  [key: string]: string;
};

export type MonitorRequestsArgs = {
  requestsCallback: (request: playwright.Request) => void;
  responseCallback: (response: playwright.Response) => void;
};
