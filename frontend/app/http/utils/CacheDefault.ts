import type { HttpCache } from "../types";

import { BaseCache } from "./BaseCache";
import { TIMEOUTS } from "../constants";

export class CacheDefault extends BaseCache implements HttpCache {
  constructor() {
    super(TIMEOUTS.DEFAULT);
  }
}
