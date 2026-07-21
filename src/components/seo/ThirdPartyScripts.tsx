'use client';

import { useEffect } from 'react';

export default function ThirdPartyScripts() {
  useEffect(() => {
    let loaded = false;

    const loadScripts = () => {
      /* eslint-disable @typescript-eslint/no-explicit-any, prefer-rest-params, prefer-spread, @typescript-eslint/no-unused-expressions */
      if (loaded) return;
      loaded = true;

      const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
      const gaId = process.env.NEXT_PUBLIC_GA4_ID;
      const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

      // 1. Google Tag Manager
      if (gtmId) {
        (function(w: any, d: any, s: any, l: any, i: any) {
          w[l] = w[l] || [];
          w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
          const f = d.getElementsByTagName(s)[0];
          const j = d.createElement(s);
          const dl = l !== 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          if (f && f.parentNode) {
            f.parentNode.insertBefore(j, f);
          } else {
            d.head.appendChild(j);
          }
        })(window, document, 'script', 'dataLayer', gtmId);
      }

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

      // 3. Meta Pixel
      if (pixelId) {
        const anyWindow = window as any;
        (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
          if (f.fbq) return;
          n = f.fbq = function() {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
          };
          if (!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = true;
          n.version = '2.0';
          n.queue = [];
          t = b.createElement(e);
          t.async = true;
          t.src = v;
          s = b.getElementsByTagName(e)[0];
          if (s && s.parentNode) {
            s.parentNode.insertBefore(t, s);
          } else {
            b.head.appendChild(t);
          }
        })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
        anyWindow.fbq('init', pixelId);
        anyWindow.fbq('track', 'PageView');
      }
    };

    // Trigger loading on interaction
    const triggerEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];

    const eventHandler = () => {
      loadScripts();
      triggerEvents.forEach((event) => {
        window.removeEventListener(event, eventHandler);
      });
    };

    triggerEvents.forEach((event) => {
      window.addEventListener(event, eventHandler, { passive: true });
    });

    return () => {
      triggerEvents.forEach((event) => {
        window.removeEventListener(event, eventHandler);
      });
    };
  }, []);

  return null;
}
