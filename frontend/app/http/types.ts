import type { Request } from "@remix-run/node";

export type HttpOptions<Variables extends Record<string, unknown> = {}> = {
  variables?: Variables;
  cache?: HttpCache;
};

export type HttpMutationOptions<
  Variables extends Record<string, unknown> = {}
> = {
  variables?: Variables;
  invalidateCache?: boolean;
};

export type HttpResponse<T> = { data: T | null };

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
