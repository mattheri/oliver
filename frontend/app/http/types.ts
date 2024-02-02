import type { Request } from "@remix-run/node";

export type HttpOptions<Variables extends Record<string, unknown> = {}> = {
  variables?: Variables;
  cache?: HttpCache;
  headers?: Headers | Record<string, string>;
};

export type HttpMutationOptions<
  Variables extends Record<string, unknown> = {},
> = {
  variables?: Variables;
  invalidateCache?: boolean;
  headers?: Headers | Record<string, string>;
};

export type HttpError = {
  message?: string;
  extensions?: {
    code?: string;
    originalError?: { statusCode?: number; message?: string };
  };
};

export type HttpResponse<T> = { data: T | null; errors?: HttpError[] };

export type CacheKey = {
  query: string;
  variables?: object;
  domain?: string;
};

export interface HttpCache {
  get<T>(key: CacheKey): T | null;
  set<T>(key: CacheKey, value: any): T;
}

export type LoaderInit = {
  route: string;
  request: Request;
  method?: Request["method"];
  headers?: Request["headers"];
};

export type HttpContextState = {
  url: URL;
};
