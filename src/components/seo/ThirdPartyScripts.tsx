'use client';

import { useEffect } from 'react';

/**
 * High-performance deferred loader for Google Tag Manager, GA4, and Meta Pixel.
 *
 * Prevents third-party trackers from blocking the critical rendering path,
 * keeping TBT near 0ms and LCP under 2.0s on throttled mobile connections.
 * 
 * - Loads immediately on first user interaction (scroll, touch, click, keydown).
 * - Falls back to requestIdleCallback / 5s timeout for idle users.
 * - Leaves Lighthouse / PageSpeed Insights audits unburdened by heavy tag bundles.
 */
export default function ThirdPartyScripts() {
  useEffect(() => {
    let loaded = false;

    const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
    const gaId = process.env.NEXT_PUBLIC_GA4_ID;
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

    // Pre-initialize dataLayer so early analytics pushes won't crash
    if (typeof window !== 'undefined') {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      const anyWindow = window as any;
      anyWindow.dataLayer = anyWindow.dataLayer || [];
    }

    const loadScripts = () => {
      /* eslint-disable @typescript-eslint/no-explicit-any, prefer-rest-params, prefer-spread, @typescript-eslint/no-unused-expressions */
      if (loaded) return;
      loaded = true;

      // 1. Google Tag Manager (Primary Tag Engine)
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

      // 2. Google Analytics 4 (Only if GTM is not active, preventing double tracking)
      if (gaId && !gtmId) {
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

      // 3. Meta Pixel (Only if GTM is not active, preventing double tracking)
      if (pixelId && !gtmId) {
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
          if (s && s.parentNode) {
            s.parentNode.insertBefore(t, s);
          } else {
            b.head.appendChild(t);
          }
        })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
        const anyWindow = window as any;
        if (typeof anyWindow.fbq === 'function') {
          anyWindow.fbq('init', pixelId);
          anyWindow.fbq('track', 'PageView');
        }
      }

      // Cleanup interaction listeners once loaded
      cleanupListeners();
    };

    // User interaction triggers
    const triggerEvents = ['scroll', 'touchstart', 'click', 'pointerdown', 'keydown'];

    const onUserInteraction = () => {
      loadScripts();
    };

    const cleanupListeners = () => {
      triggerEvents.forEach((event) => {
        window.removeEventListener(event, onUserInteraction);
      });
    };

    triggerEvents.forEach((event) => {
      window.addEventListener(event, onUserInteraction, { passive: true, once: true });
    });

    // Fallback idle timeout: load after 5 seconds of idle time if no interaction occurs
    let idleTimer: any;
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      idleTimer = (window as any).requestIdleCallback(loadScripts, { timeout: 5000 });
    } else {
      idleTimer = setTimeout(loadScripts, 5000);
    }

    return () => {
      cleanupListeners();
      if (idleTimer) {
        if (typeof window !== 'undefined' && 'cancelIdleCallback' in window) {
          (window as any).cancelIdleCallback(idleTimer);
        } else {
          clearTimeout(idleTimer);
        }
      }
    };
  }, []);

  return null;
}
