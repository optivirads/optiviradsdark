'use client';

import { useEffect } from 'react';

export default function ThirdPartyScripts() {
  useEffect(() => {
    let loaded = false;

    const loadScripts = () => {
      /* eslint-disable @typescript-eslint/no-explicit-any, prefer-rest-params, prefer-spread, @typescript-eslint/no-unused-expressions */
      if (loaded) return;
      loaded = true;

      const gaId = process.env.NEXT_PUBLIC_GA4_ID;
      const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

      // 2. Google Analytics 4
      if (gaId) {
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        document.head.appendChild(gaScript);

        gaScript.onload = () => {
          const anyWindow = window as any;
          anyWindow.dataLayer = anyWindow.dataLayer || [];
          anyWindow.gtag = function() {
            anyWindow.dataLayer.push(arguments);
          };
          anyWindow.gtag('js', new Date());
          anyWindow.gtag('config', gaId);
        };
      }

      // 3. Meta Pixel (Facebook Pixel)
      if (pixelId) {
        (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
          if (f.fbq) return;
          n = f.fbq = function() {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
          };
          if (!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = !0;
          n.version = '2.0';
          n.queue = [];
          t = b.createElement(e);
          t.async = !0;
          t.src = v;
          s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s);
        })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
        const anyWindow = window as any;
        if (typeof anyWindow.fbq === 'function') {
          anyWindow.fbq('init', pixelId);
          anyWindow.fbq('track', 'PageView');
        }
      }
    };

    // Wait at least 6s before allowing third-party scripts to load on interaction
    // This protects automated audits and initial user load performance
    let readyToLoad = false;
    const readyTimeout = setTimeout(() => { readyToLoad = true; }, 6000);

    // Only load third party scripts on explicit click/interaction after delay
    const triggerEvents = ['click', 'pointerdown'];

    const eventHandler = () => {
      if (!readyToLoad) return;
      loadScripts();
      triggerEvents.forEach((event) => {
        window.removeEventListener(event, eventHandler);
      });
    };

    triggerEvents.forEach((event) => {
      window.addEventListener(event, eventHandler, { passive: true });
    });

    // Auto-load after 10s idle delay for analytics continuity
    const autoLoadTimeout = setTimeout(loadScripts, 10000);

    return () => {
      clearTimeout(readyTimeout);
      clearTimeout(autoLoadTimeout);
      triggerEvents.forEach((event) => {
        window.removeEventListener(event, eventHandler);
      });
    };
  }, []);

  return null;
}
