import type { HttpMutationOptions, HttpOptions } from "../types";
import { Mutation } from "./Mutation";
import { Query } from "./Query";

export class Http {
  constructor(private readonly base: string = process.env.API_URL ?? "") {
    this.base = base;
  }

  public query<T>(query: string, options?: HttpOptions) {
    return new Query(this.base, query, options).execute<T>();
  }

  public mutate<T>(
    query: string,
    options?: HttpMutationOptions
  ) {
    return new Mutation(this.base, query, options).execute<T>();
  }
}
