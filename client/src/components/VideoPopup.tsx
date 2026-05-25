import { useEffect, useState } from "react";
import { X } from "lucide-react";

const VIDEO_ID = "-KiElXrccuE";
const SESSION_KEY = "video_popup_shown";

export default function VideoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const t = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem(SESSION_KEY, "1");
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.78)" }}
      onClick={close}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl"
        style={{ background: "#0e0477" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3">
          <span
            className="text-white text-sm font-bold uppercase tracking-widest"
            style={{ fontFamily: "Antonio, sans-serif", color: "#BCCE16" }}
          >
            Congreso Parques Tijuana 2026
          </span>
          <button
            onClick={close}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Video */}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
            title="Congreso Parques Tijuana 2026"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: "none" }}
          />
        </div>

        {/* Footer */}
        <div className="px-5 py-3 flex items-center justify-between">
          <span
            className="text-white/60 text-xs"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            13–15 de mayo · Tijuana, Baja California
          </span>
          <button
            onClick={close}
            className="text-xs font-semibold px-4 py-1.5 rounded-full transition-colors"
            style={{
              backgroundColor: "#BCCE16",
              color: "#0e0477",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
