import type { HttpCache } from "../types";

import { BaseCache } from "./BaseCache";
import { TIMEOUTS } from "../constants";

export class CacheShort extends BaseCache implements HttpCache {
  constructor() {
    super(TIMEOUTS.SHORT);
  }
}
