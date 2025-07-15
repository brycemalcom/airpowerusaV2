"use client";

import { useEffect, useState } from "react";

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

interface PerformanceEntryWithProcessing extends PerformanceEntry {
  processingStart: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    // Core Web Vitals measurement
    const measurePerformance = () => {
      // FCP (First Contentful Paint)
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0] as PerformanceEntry;
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }

      // TTFB (Time to First Byte)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.fetchStart;
        setMetrics(prev => ({ ...prev, ttfb }));
      }

      // LCP (Largest Contentful Paint)
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as PerformanceEntry;
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // FID (First Input Delay)
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              const fidEntry = entry as PerformanceEntryWithProcessing;
              setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // CLS (Cumulative Layout Shift)
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            const entries = list.getEntries();
            entries.forEach((entry) => {
              const clsEntry = entry as LayoutShiftEntry;
              if (!clsEntry.hadRecentInput) {
                clsValue += clsEntry.value;
              }
            });
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

          return () => {
            lcpObserver.disconnect();
            fidObserver.disconnect();
            clsObserver.disconnect();
          };
        } catch {
          // Performance Observer not supported - silently fail
        }
      }
    };

    // Start measuring after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, []);

  const getScoreColor = (value: number, thresholds: [number, number]) => {
    if (value <= thresholds[0]) return 'text-green-500';
    if (value <= thresholds[1]) return 'text-yellow-500';
    return 'text-red-500';
  };

  const formatMs = (ms: number) => `${Math.round(ms)}ms`;
  const formatScore = (score: number) => score.toFixed(3);

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-black/80 text-white px-3 py-2 rounded-lg text-xs font-mono hover:bg-black/90 transition-colors"
      >
        ⚡ Perf
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-black/90 text-white p-4 rounded-lg shadow-xl min-w-[280px] font-mono text-xs">
          <h3 className="font-bold mb-3 text-sm">Core Web Vitals</h3>
          
          {metrics.lcp && (
            <div className="mb-2">
              <span className="text-gray-300">LCP: </span>
              <span className={getScoreColor(metrics.lcp, [2500, 4000])}>
                {formatMs(metrics.lcp)}
              </span>
              <span className="text-gray-400 ml-2">(Good: ≤2.5s)</span>
            </div>
          )}
          
          {metrics.fid && (
            <div className="mb-2">
              <span className="text-gray-300">FID: </span>
              <span className={getScoreColor(metrics.fid, [100, 300])}>
                {formatMs(metrics.fid)}
              </span>
              <span className="text-gray-400 ml-2">(Good: ≤100ms)</span>
            </div>
          )}
          
          {metrics.cls !== undefined && (
            <div className="mb-2">
              <span className="text-gray-300">CLS: </span>
              <span className={getScoreColor(metrics.cls, [0.1, 0.25])}>
                {formatScore(metrics.cls)}
              </span>
              <span className="text-gray-400 ml-2">(Good: ≤0.1)</span>
            </div>
          )}
          
          {metrics.fcp && (
            <div className="mb-2">
              <span className="text-gray-300">FCP: </span>
              <span className={getScoreColor(metrics.fcp, [1800, 3000])}>
                {formatMs(metrics.fcp)}
              </span>
              <span className="text-gray-400 ml-2">(Good: ≤1.8s)</span>
            </div>
          )}
          
          {metrics.ttfb && (
            <div className="mb-2">
              <span className="text-gray-300">TTFB: </span>
              <span className={getScoreColor(metrics.ttfb, [800, 1800])}>
                {formatMs(metrics.ttfb)}
              </span>
              <span className="text-gray-400 ml-2">(Good: ≤800ms)</span>
            </div>
          )}
          
          <div className="mt-3 pt-2 border-t border-gray-600 text-gray-400">
            <div>Video Loading: Desktop Only</div>
            <div>Images: Lazy + WebP/AVIF</div>
            <div>Cache: Headers Configured</div>
          </div>
        </div>
      )}
    </div>
  );
} 