import type { LoaderInit } from "../types";

import { useCallback, useMemo, useState, useRef, useEffect } from "react";
import { LoaderService } from "../service";

export default function useClientLoader() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const controller = useRef(new AbortController());

  const onRequestStart = useCallback(() => {
    setLoading(true);
  }, []);

  const onRequestEnd = useCallback(() => {
    setLoading(false);
  }, []);

  const onError = useCallback((error: Error) => {
    setError(error);
  }, []);

  const loaderService = useMemo(() => new LoaderService(), []);
  const loader = useCallback(
    <T>(args: Omit<LoaderInit, "request">) => {
      const { signal } = controller.current;
      return loaderService.fromClient<T>({
        ...args,
        signal,
        onRequestStart,
        onRequestEnd,
        onError,
      });
    },
    [loaderService],
  );

  return { loader, loading, error, abort: controller.current.abort };
}
