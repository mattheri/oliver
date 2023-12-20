import { CacheKey } from "../types";

export class BaseCache {
  cache: Map<string, any> = new Map();
  private timeout: number;

  constructor(timeout: number) {
    this.timeout = timeout;
  }

  private invalidate(key: string) {
    if (Date.now() - this.cache.get(key).timestamp > this.timeout) {
      this.cache.delete(key);
    }
  }

  private createKey(key: string, variables: object = {}) {
    return Buffer.from(JSON.stringify({ key, variables })).toString("base64");
  }

  get<T>({ query, variables }: CacheKey): T | null {
    const internalKey = this.createKey(query, variables);

    if (this.cache.has(internalKey)) {
      this.invalidate(internalKey);
    }

    return this.cache.get(internalKey)?.value ?? null;
  }

  set<T>({ query, variables, domain }: CacheKey, value: any): T {
    const internalKey = this.createKey(query, variables);
    this.cache.set(internalKey, {
      value,
      timestamp: Date.now(),
      domain,
    });

    return value;
  }

  forceInvalidationByDomain(domain: string) {
    this.cache.forEach((value, key) => {
      if (value.domain === domain) {
        this.cache.delete(key);
      }
    });
  }
}
