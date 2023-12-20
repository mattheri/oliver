import { useEffect, useRef, useState, useCallback } from "react";

type UseIntersectionObserverInit = IntersectionObserverInit & {
  disconnectAfterIntersect?: boolean;
};

export const useIntersectionObserver = <
  NodeType extends HTMLElement = HTMLElement
>({
  root,
  rootMargin,
  threshold,
  disconnectAfterIntersect,
}: UseIntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<NodeType>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const onIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[], _observer: IntersectionObserver) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (disconnectAfterIntersect) {
          _observer.disconnect();
          _observer.unobserve(entry.target);
          observer.current = null;
        }
      }
    },
    [disconnectAfterIntersect]
  );

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });

    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
        if (ref.current) observer.current.unobserve(ref.current);
        observer.current = null;
      }
    };
  }, [root, rootMargin, threshold, disconnectAfterIntersect, ref]);

  return { ref, isIntersecting };
};
