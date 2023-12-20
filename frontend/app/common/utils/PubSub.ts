export class PubSub<Events extends Record<string, string>> {
  public listeners: Map<Events[keyof Events], Function[]>;

  constructor(events: Events) {
    this.listeners = new Map(
      Object.values(events).map((event) => [event, []])
    ) as unknown as Map<Events[keyof Events], Function[]>;
  }

  public on(event: Events[keyof Events], callback: Function) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event)?.push(callback);
  }

  public off(event: Events[keyof Events], callback: Function) {
    if (!this.listeners.has(event)) {
      return;
    }

    const callbacks = this.listeners.get(event);

    if (!callbacks || !callbacks.length) {
      return;
    }

    this.listeners.set(
      event,
      callbacks.filter((cb) => cb !== callback)
    );
  }

  public emit(event: Events[keyof Events], ...args: any[]) {
    if (!this.listeners.has(event)) {
      return;
    }

    const callbacks = this.listeners.get(event);

    if (!callbacks || !callbacks.length) {
      return;
    }

    callbacks.forEach((callback) => callback(...args));
  }
}
