import type { HttpMutationOptions, HttpOptions } from "../types";
import { Mutation } from "../utils/Mutation";
import { Query } from "../utils/Query";

export default class HttpService {
  constructor(private readonly base: string = process.env.API_URL ?? "") {
    this.base = base;
  }

  public query<T extends unknown>(query: string, options?: HttpOptions) {
    return new Query(this.base, query, options).execute<T>();
  }

  public mutate<T extends unknown>(
    query: string,
    options?: HttpMutationOptions
  ) {
    return new Mutation(this.base, query, options).execute<T>();
  }
}
