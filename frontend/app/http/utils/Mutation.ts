import { HTTP_ERROR, HTTP_HEADERS, HTTP_METHOD } from "../constants";
import type { HttpMutationOptions, HttpResponse } from "../types";
import { Cache } from "./Cache";

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

  public async execute<T>(): Promise<HttpResponse<T>> {
    if (typeof this.query !== "string") {
      throw new Error(HTTP_ERROR.INVALID_QUERY);
    }

    if (this.options.variables && typeof this.options.variables !== "object") {
      throw new Error(
        `${HTTP_ERROR.INVALID_VARIABLES}: ${this.options.variables}`,
      );
    }

    const body = JSON.stringify({
      query: this.query,
      variables: this.options.variables,
    });

    const headers = this.options.headers || {};

    const response = await fetch(this.base, {
      method: HTTP_METHOD,
      headers: {
        ...HTTP_HEADERS,
        ...headers,
      },
      body,
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return (await response.json()) as NonNullable<HttpResponse<T>>;
  }
}
