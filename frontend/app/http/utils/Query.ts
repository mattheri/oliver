import { stripIgnoredCharacters } from "graphql";

import { HTTP_ERROR, HTTP_HEADERS, HTTP_METHOD } from "../constants";
import type { HttpCache, HttpOptions, HttpResponse } from "../types";
import { Cache } from "./Cache";

export class Query {
  private readonly base: string;
  private readonly query: string;
  private readonly options: HttpOptions = {};
  private readonly cache: HttpCache;

  constructor(base: string, query: string, options?: HttpOptions) {
    this.base = base;
    this.query = query;
    this.options = options || {};
    this.cache = this.options.cache || Cache.Default();
  }

  public async execute<T>(): Promise<HttpResponse<T>> {
    if (typeof this.query !== "string") {
      throw new Error(HTTP_ERROR.INVALID_QUERY);
    }

    if (this.options.variables && typeof this.options.variables !== "object") {
      throw new Error(
        `${HTTP_ERROR.INVALID_VARIABLES}: ${this.options.variables}`,
      );
    }

    const cached = this.cache.get<HttpResponse<T>>({
      query: this.query,
      variables: this.options.variables,
    });

    if (cached) {
      return cached;
    }

    const body = JSON.stringify({
      query: this.query,
      variables: this.options.variables,
    });

    const headers = this.options.headers || {};

    const response = await fetch(this.base, {
      method: HTTP_METHOD,
      headers: {
        ...headers,
        ...HTTP_HEADERS,
      },
      body,
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const results = (await response.json()) as NonNullable<HttpResponse<T>>;

    return results;
  }
}
