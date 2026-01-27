/**
 * AnnouncementBanner - Componente global de cintilla de anuncios
 * 
 * Características:
 * - Animación suave y continua con velocidad reducida para lectura cómoda
 * - Loop infinito sin saltos ni reinicios visibles
 * - Responsive: velocidad más lenta en móviles
 * - Accesibilidad: respeta prefers-reduced-motion
 * - Reutilizable en todas las páginas del sitio
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

// Velocidades más lentas para lectura cómoda
const speedMap = {
  slow: "80s",    // Muy lento para mensajes largos
  normal: "50s",  // Velocidad cómoda de lectura (antes 25s)
  fast: "35s",    // Moderadamente rápido
};

// Velocidades aún más lentas para móviles
const mobileSpeedMap = {
  slow: "100s",
  normal: "70s",
  fast: "50s",
};

export function AnnouncementBanner({
  messages,
  speed = "normal",
  backgroundColor = "#0e0477",
  textColor = "white",
  highlightColor = "#d0dd15",
}: AnnouncementBannerProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    motionQuery.addEventListener("change", handleMotionChange);

    // Check for mobile viewport
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mobileQuery.matches);

    const handleMobileChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mobileQuery.addEventListener("change", handleMobileChange);

    return () => {
      motionQuery.removeEventListener("change", handleMotionChange);
      mobileQuery.removeEventListener("change", handleMobileChange);
    };
  }, []);

  if (messages.length === 0) return null;

  // Determinar velocidad según dispositivo
  const currentSpeed = isMobile ? mobileSpeedMap[speed] : speedMap[speed];

  // Repetir mensajes suficientes veces para llenar la pantalla sin huecos
  const repeatCount = 8;
  const tickerContent = Array.from({ length: repeatCount }).flatMap((_, repeatIndex) =>
    messages.map((msg, index) => (
      <span key={`${msg.id}-${repeatIndex}-${index}`} className="inline-flex items-center shrink-0">
        <span style={{ color: highlightColor }} className="mx-3">★</span>
        <span className="whitespace-nowrap">{msg.text}</span>
        <span style={{ color: highlightColor }} className="mx-3">★</span>
      </span>
    ))
  );

  // Para usuarios con preferencia de movimiento reducido: texto estático centrado
  if (prefersReducedMotion) {
    return (
      <div
        className="fixed top-0 left-0 right-0 z-[60] h-6 flex items-center justify-center overflow-hidden"
        style={{ backgroundColor }}
        role="banner"
        aria-live="polite"
        aria-label="Anuncios importantes"
      >
        <p
          className="text-[10px] sm:text-xs font-semibold tracking-wide whitespace-nowrap px-4"
          style={{ fontFamily: "Montserrat, sans-serif", color: textColor }}
        >
          {messages.map((msg, index) => (
            <span key={msg.id}>
              <span style={{ color: highlightColor }}>★</span>
              <span className="mx-2">{msg.text}</span>
              <span style={{ color: highlightColor }}>★</span>
              {index < messages.length - 1 && <span className="mx-4">|</span>}
            </span>
          ))}
        </p>
      </div>
    );
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-6 flex items-center overflow-hidden"
      style={{ backgroundColor }}
      role="banner"
      aria-live="polite"
      aria-label="Anuncios importantes"
    >
      <div
        className="announcement-ticker flex whitespace-nowrap"
        style={{
          animationDuration: currentSpeed,
        }}
      >
        {/* Primera copia del contenido */}
        <div
          className="flex items-center text-[10px] sm:text-xs font-semibold tracking-wide"
          style={{ fontFamily: "Montserrat, sans-serif", color: textColor }}
        >
          {tickerContent}
        </div>
        {/* Segunda copia para loop infinito sin saltos */}
        <div
          className="flex items-center text-[10px] sm:text-xs font-semibold tracking-wide"
          style={{ fontFamily: "Montserrat, sans-serif", color: textColor }}
          aria-hidden="true"
        >
          {tickerContent}
        </div>
      </div>

      {/* Estilos CSS para animación suave y continua */}
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
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }

        /* Pausar al hover para permitir lectura */
        .announcement-ticker:hover {
          animation-play-state: paused;
        }

        /* Respetar preferencia de movimiento reducido */
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
