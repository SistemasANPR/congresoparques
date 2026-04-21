import { useEffect, useRef, useState } from "react";
import { X, ChevronDown, ChevronUp, Mail } from "lucide-react";

export function NewsletterBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [minimized, setMinimized] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (dismissed || scriptLoaded.current) return;

    // Observer: waits for AC to inject the form into the DOM, then moves it into our container
    const observer = new MutationObserver(() => {
      if (!containerRef.current) return;
      const acForm = document.querySelector("._form_15_:not([data-moved])") as HTMLElement | null;
      if (acForm && !containerRef.current.contains(acForm)) {
        acForm.setAttribute("data-moved", "true");
        containerRef.current.appendChild(acForm);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Load the AC script
    const existing = document.getElementById("ac-newsletter-script");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "ac-newsletter-script";
    script.src = "https://anpr.activehosted.com/f/embed.php?id=15";
    script.charset = "utf-8";
    script.async = true;
    document.body.appendChild(script);
    scriptLoaded.current = true;

    return () => observer.disconnect();
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className="no-print fixed bottom-0 left-0 right-0 z-50 shadow-2xl"
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

        <div className="flex items-center gap-1">
          <button
            onClick={(e) => { e.stopPropagation(); setMinimized(!minimized); }}
            className="rounded p-1.5 transition-colors hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.7)" }}
            aria-label={minimized ? "Expandir formulario" : "Minimizar formulario"}
          >
            {minimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setDismissed(true); }}
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

      {/* Form container — AC form gets moved here by the MutationObserver */}
      <div
        ref={containerRef}
        className={`overflow-y-auto transition-all duration-300 ${minimized ? "max-h-0 py-0" : "max-h-80 px-5 py-3"}`}
      >
        <style>{`
          ._form-title { color: #ffffff !important; }
          ._submit { background-color: #6847f6 !important; text-align: center !important; }
          ._form_15_ { background: transparent !important; box-shadow: none !important; }
          ._form_15_ ._field-wrapper input { background: rgba(255,255,255,0.1) !important; color: #fff !important; border-color: rgba(255,255,255,0.3) !important; }
          ._form_15_ ._field-wrapper input::placeholder { color: rgba(255,255,255,0.5) !important; }
        `}</style>
      </div>
    </div>
  );
}
