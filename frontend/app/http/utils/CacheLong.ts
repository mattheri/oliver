import type { HttpCache } from "../types";

import { BaseCache } from "./BaseCache";
import { TIMEOUTS } from "../constants";

export class CacheLong extends BaseCache implements HttpCache {
  constructor() {
    super(TIMEOUTS.LONG);
  }
}
