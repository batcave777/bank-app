import { useEffect, useRef } from 'react';

export const useInfiniteScroll = (loadMore: () => void) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = containerRef.current;
      if (element) {
        const isNearBottom =
          element.scrollTop + element.clientHeight >= element.scrollHeight - 100;

        if (isNearBottom) {
          loadMore();
        }
      }
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (element) {
        element.removeEventListener('scroll', handleScroll);
      }
    };
  }, [loadMore]);

  return containerRef;
};