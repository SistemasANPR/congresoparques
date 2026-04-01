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
      className="fixed bottom-0 left-0 right-0 z-50 shadow-2xl transition-all duration-300"
      style={{ backgroundColor: "#35219b" }}
    >
      {/* Header bar */}
      <div
        className="flex items-center justify-between px-4 py-2 cursor-pointer select-none"
        style={{ backgroundColor: "#0e0477" }}
        onClick={() => setMinimized(!minimized)}
      >
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-white" />
          <span
            className="text-white font-bold text-sm uppercase tracking-wider"
            style={{ fontFamily: "Antonio, sans-serif" }}
          >
            Suscríbete al Boletín del Congreso
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMinimized(!minimized);
            }}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label={minimized ? "Expandir" : "Minimizar"}
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
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Cerrar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Form container */}
      {!minimized && (
        <div
          ref={containerRef}
          className="px-4 py-3 overflow-y-auto max-h-64"
          style={{ backgroundColor: "#35219b" }}
        >
          <div className="_form_15_" />
        </div>
      )}
    </div>
  );
}
