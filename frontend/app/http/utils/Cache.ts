import { CacheCustom } from "./CacheCustom";
import { CacheDefault } from "./CacheDefault";
import { CacheLong } from "./CacheLong";
import { CacheShort } from "./CacheShort";

export class Cache {
  private static shortCache: CacheShort;
  private static longCache: CacheLong;
  private static defaultCache: CacheDefault;
  private static customCaches: Map<number, CacheCustom> = new Map();

  static Short() {
    if (!Cache.shortCache) {
      Cache.shortCache = new CacheShort();
    }

    return Cache.shortCache;
  }

  static Default() {
    if (!Cache.defaultCache) {
      Cache.defaultCache = new CacheDefault();
    }

    return Cache.defaultCache;
  }

  static Long() {
    if (!Cache.longCache) {
      Cache.longCache = new CacheLong();
    }

    return Cache.longCache;
  }

  static Custom(timeout: number) {
    if (!Cache.customCaches.has(timeout)) {
      Cache.customCaches.set(timeout, new CacheCustom(timeout));
    }

    return Cache.customCaches.get(timeout)!;
  }

  static invalidateByDomain(domain: string) {
    Cache.shortCache?.forceInvalidationByDomain(domain);
    Cache.longCache?.forceInvalidationByDomain(domain);
    Cache.defaultCache?.forceInvalidationByDomain(domain);
    Cache.customCaches.forEach((cache) => {
      cache.forceInvalidationByDomain(domain);
    });
  }
}
