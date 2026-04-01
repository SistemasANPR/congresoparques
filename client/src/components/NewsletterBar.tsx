import { useEffect, useRef, useState } from "react";
import { X, ChevronDown, ChevronUp, Mail } from "lucide-react";

export function NewsletterBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [minimized, setMinimized] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (dismissed || scriptLoaded.current) return;

    const timer = setTimeout(() => {
      if (!containerRef.current) return;

      const existingScript = document.getElementById("ac-newsletter-script");
      if (existingScript) existingScript.remove();

      const script = document.createElement("script");
      script.id = "ac-newsletter-script";
      script.src = "https://anpr.activehosted.com/f/embed.php?id=15";
      script.charset = "utf-8";
      script.async = true;
      document.body.appendChild(script);
      scriptLoaded.current = true;
    }, 800);

    return () => clearTimeout(timer);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 shadow-2xl"
      style={{
        background: "linear-gradient(135deg, #0e0477 0%, #35219b 50%, #6847f6 100%)",
        borderTop: "3px solid #BCCE16",
      }}
    >
      {/* Header / toggle bar */}
      <div
        className="flex items-center justify-between px-5 py-2 cursor-pointer select-none"
        onClick={() => setMinimized(!minimized)}
      >
        {/* Left: icon + label */}
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0"
            style={{ backgroundColor: "#BCCE16" }}
          >
            <Mail className="w-4 h-4" style={{ color: "#0e0477" }} />
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className="text-white font-bold text-sm uppercase tracking-widest"
              style={{ fontFamily: "Antonio, sans-serif" }}
            >
              Boletín del Congreso
            </span>
            <span
              className="text-xs font-medium hidden sm:block"
              style={{ color: "#BCCE16", fontFamily: "Montserrat, sans-serif" }}
            >
              Mantente informado — suscríbete gratis
            </span>
          </div>
        </div>

        {/* Right: controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMinimized(!minimized);
            }}
            className="rounded p-1.5 transition-colors hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.7)" }}
            aria-label={minimized ? "Expandir formulario" : "Minimizar formulario"}
          >
            {minimized ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setDismissed(true);
            }}
            className="rounded p-1.5 transition-colors hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.7)" }}
            aria-label="Cerrar barra de suscripción"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Divider */}
      {!minimized && (
        <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.1)" }} />
      )}

      {/* Form container */}
      {!minimized && (
        <div
          ref={containerRef}
          className="px-5 py-3 overflow-y-auto max-h-60"
        >
          <style>{`._form-title { color: #ffffff !important; } ._submit { background-color: #6847f6 !important; color: #ffffff !important; text-align: center !important; }`}</style>
          <div className="_form_15_" />
        </div>
      )}
    </div>
  );
}
