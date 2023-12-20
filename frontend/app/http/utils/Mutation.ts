import type { HttpMutationOptions, HttpResponse } from "../types";

import { HTTP_ERROR, HTTP_HEADERS, HTTP_METHOD } from "../constants";
import { Cache } from "./Cache";
import { stripIgnoredCharacters } from "graphql";

export class Mutation {
  private readonly base: string;
  private readonly query: string;
  private readonly options: HttpMutationOptions = {};
  private readonly cache: typeof Cache;

  constructor(
    base: string,
    query: string,
    options?: HttpMutationOptions,
    cache: typeof Cache = Cache,
  ) {
    this.base = base;
    this.query = query;
    this.options = options || {};
    this.cache = cache;
  }

  private getDomain() {
    const normalizedQuery = stripIgnoredCharacters(this.query);
    const queryWithoutName = normalizedQuery.slice(
      normalizedQuery.indexOf("{") + 1,
      normalizedQuery.length,
    );
    const endNameIndex =
      queryWithoutName.indexOf("(") > -1
        ? queryWithoutName.indexOf("(")
        : queryWithoutName.indexOf("{");
    const queryName = queryWithoutName.slice(0, endNameIndex);
    return queryName.split("_")[1];
  }

  public async execute<T extends unknown>(): Promise<
    NonNullable<HttpResponse<T>>
  > {
    if (typeof this.query !== "string") {
      throw new Error(HTTP_ERROR.INVALID_QUERY);
    }

    if (typeof this.options.variables !== "object") {
      throw new Error(
        `${HTTP_ERROR.INVALID_VARIABLES}: ${this.options.variables}`,
      );
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

    if (this.options.invalidateCache) {
      this.cache.invalidateByDomain(this.getDomain());
    }

    return (await response.json()) as NonNullable<HttpResponse<T>>;
  }
}
