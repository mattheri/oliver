import type { LoaderInit } from "../types";

type Handlers = {
  onRequestStart?: () => void;
  signal?: AbortSignal;
  onRequestEnd?: () => void;
  onError?: (error: Error) => void;
  canRequest?: boolean;
};

export default class LoaderService {
  public get isClient() {
    return typeof window !== "undefined";
  }

  public async fromClient<T>({
    route,
    method,
    headers,
    signal,
    onRequestStart,
    onRequestEnd,
    onError,
    canRequest = true,
  }: Omit<LoaderInit & Handlers, "request">): Promise<T | undefined> {
    try {
      if (!canRequest) return;

      if (onRequestStart) {
        onRequestStart();
      }
      const origin = window.location.origin;
      const url = new URL(route, origin);
      const headerObj = Object.fromEntries(headers ?? []);

      const response = await fetch(url.toString(), {
        method: method ?? "GET",
        headers: {
          "Content-Type": "application/json",
          ...headerObj,
        },
        signal,
      });

      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      return (await response.json()) as T;
    } catch (e) {
      const error = e as Error;
      console.error(error);
      if (onError) {
        onError(error);
      }
    } finally {
      if (onRequestEnd) {
        onRequestEnd();
      }
    }
  }

  public async fromServer<T>({
    route,
    method,
    headers,
    request,
  }: LoaderInit): Promise<T | undefined> {
    try {
      const requestUrl = new URL(request.url);
      const origin = requestUrl.origin;
      const url = new URL(route, origin);
      const headerObj = Object.fromEntries(headers ?? []);

      const response = await fetch(url.toString(), {
        method: method ?? "GET",
        headers: {
          "Content-Type": "application/json",
          ...headerObj,
        },
      });

      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      return (await response.json()) as T;
    } catch (e) {
      const error = e as Error;
      console.error(error);
    }
  }
}
