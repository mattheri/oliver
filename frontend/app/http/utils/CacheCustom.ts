import type { HttpCache } from "../types";

import { BaseCache } from "./BaseCache";

export class CacheCustom extends BaseCache implements HttpCache {
  constructor(timeout: number) {
    super(timeout);
  }
}
