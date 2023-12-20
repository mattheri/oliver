import type { HttpCache, HttpOptions, HttpResponse } from "../types";

import { HTTP_ERROR, HTTP_HEADERS, HTTP_METHOD } from "../constants";
import { Cache } from "./Cache";
import { stripIgnoredCharacters } from "graphql";

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

  private getDomain() {
    const normalizedQuery = stripIgnoredCharacters(this.query);
    const queryWithoutName = normalizedQuery.slice(
      normalizedQuery.indexOf("{") + 1,
      normalizedQuery.length
    );
    const endNameIndex =
      queryWithoutName.indexOf("(") > -1
        ? queryWithoutName.indexOf("(")
        : queryWithoutName.indexOf("{");
    const queryName = queryWithoutName.slice(0, endNameIndex);
    return queryName.split("_")[0];
  }

  public async execute<T extends unknown>(): Promise<HttpResponse<T>> {
    if (typeof this.query !== "string") {
      throw new Error(HTTP_ERROR.INVALID_QUERY);
    }

    if (typeof this.options.variables !== "object") {
      throw new Error(
        `${HTTP_ERROR.INVALID_VARIABLES}: ${this.options.variables}`
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

    const response = await fetch(this.base, {
      method: HTTP_METHOD,
      headers: HTTP_HEADERS,
      body,
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return this.cache.set<HttpResponse<T>>(
      {
        query: this.query,
        variables: this.options.variables,
        domain: this.getDomain(),
      },
      await response.json()
    );
  }
}
