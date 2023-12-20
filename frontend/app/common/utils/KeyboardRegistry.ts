import { PubSub } from "./PubSub";

const events: Record<string, string> = {};

class KeyboardRegistry {
  static _instance: KeyboardRegistry;

  static get instance() {
    return this._instance || (this._instance = new KeyboardRegistry());
  }

  private pubSub: PubSub<Record<string, string>>;

  constructor(pubSub: PubSub<Record<string, string>> = new PubSub(events)) {
    this.pubSub = pubSub;
  }

  register(key: string, callback: Function) {
    this.pubSub.on(key, callback);
  }

  unregister(key: string, callback: Function) {
    this.pubSub.off(key, callback);
  }

  emit(key: string, ...args: any[]) {
    this.pubSub.emit(key, ...args);
  }
}

export const keyboardRegistry = KeyboardRegistry.instance;
