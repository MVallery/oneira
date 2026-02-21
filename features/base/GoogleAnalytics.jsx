import { usePathname } from 'expo-router';
import { useEffect } from 'react';

export const GoogleAnalytics = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-2G34SDVCBT';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-2G34SDVCBT');
  }, []);

  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-2G34SDVCBT', { page_path: pathname });
    }
  }, [pathname]);

  return null;
};
