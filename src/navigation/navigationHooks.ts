import { useRouter as useNextRouter } from 'next/router';
import { useCallback } from 'react';

export function useRouter() {
  const router = useNextRouter();
  const navigate = useCallback((href: string) => {
    router.push(href);
  }, []);

  return { navigate, router };
}
