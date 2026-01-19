/**
 * AnnouncementBanner - Componente de banner de anuncios con animación tipo ticker
 *
 * Decisión de implementación:
 * Se eligió CSS animation con transform translateX por ser la opción más simple,
 * performante (usa GPU) y mantenible. Alternativas consideradas:
 * - JavaScript-based: Más control pero mayor complejidad y consumo de recursos
 * - Framer Motion: Requiere dependencia adicional para algo que CSS hace bien
 *
 * El componente duplica el contenido para crear un loop infinito seamless.
 */

import { useEffect, useState } from "react";

interface AnnouncementMessage {
  id: string;
  text: string;
  highlight?: boolean;
}

interface AnnouncementBannerProps {
  messages: AnnouncementMessage[];
  speed?: "slow" | "normal" | "fast";
  backgroundColor?: string;
  textColor?: string;
  highlightColor?: string;
}

const speedMap = {
  slow: "40s",
  normal: "25s",
  fast: "15s",
};

export function AnnouncementBanner({
  messages,
  speed = "normal",
  backgroundColor = "#0e0477",
  textColor = "white",
  highlightColor = "#d0dd15",
}: AnnouncementBannerProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (messages.length === 0) return null;

  // Build the ticker content with separators
  const tickerContent = messages.map((msg, index) => (
    <span key={msg.id} className="inline-flex items-center">
      <span style={{ color: highlightColor }}>★</span>
      <span className="mx-2">{msg.text}</span>
      <span style={{ color: highlightColor }}>★</span>
      {index < messages.length - 1 && <span className="mx-4">|</span>}
    </span>
  ));

  // For reduced motion: show static text that cycles
  if (prefersReducedMotion) {
    return (
      <div
        className="fixed top-0 left-0 right-0 z-[60] h-5 flex items-center justify-center overflow-hidden"
        style={{ backgroundColor }}
        role="banner"
        aria-live="polite"
        aria-label="Anuncios importantes"
      >
        <p
          className="text-[10px] sm:text-xs font-semibold tracking-wide whitespace-nowrap"
          style={{ fontFamily: "Montserrat, sans-serif", color: textColor }}
        >
          {tickerContent}
        </p>
      </div>
    );
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-5 flex items-center overflow-hidden"
      style={{ backgroundColor }}
      role="banner"
      aria-live="polite"
      aria-label="Anuncios importantes"
    >
      <div
        className="announcement-ticker flex whitespace-nowrap"
        style={{
          animationDuration: speedMap[speed],
        }}
      >
        {/* First copy of content */}
        <div
          className="flex items-center text-[10px] sm:text-xs font-semibold tracking-wide px-4"
          style={{ fontFamily: "Montserrat, sans-serif", color: textColor }}
        >
          {tickerContent}
        </div>
        {/* Duplicate for seamless loop */}
        <div
          className="flex items-center text-[10px] sm:text-xs font-semibold tracking-wide px-4"
          style={{ fontFamily: "Montserrat, sans-serif", color: textColor }}
          aria-hidden="true"
        >
          {tickerContent}
        </div>
      </div>

      {/* CSS Animation Styles */}
      <style>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .announcement-ticker {
          animation: ticker linear infinite;
          will-change: transform;
        }

        .announcement-ticker:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .announcement-ticker {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

export default AnnouncementBanner;
