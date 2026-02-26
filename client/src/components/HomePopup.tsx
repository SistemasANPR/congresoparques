import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "wouter";
import { X } from "lucide-react";

export default function HomePopup() {
  const [location] = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location === "/") {
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, [location]);

  if (location !== "/" || !visible) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.65)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "popupFadeIn 0.25s ease",
      }}
      onClick={() => setVisible(false)}
    >
      <style>{`
        @keyframes popupFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes popupScaleIn {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div
        style={{
          position: "relative",
          width: "min(90vw, 420px)",
          animation: "popupScaleIn 0.28s ease",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setVisible(false)}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 10,
            background: "rgba(0,0,0,0.45)",
            border: "none",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#fff",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.75)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.45)")}
          aria-label="Cerrar"
        >
          <X size={18} />
        </button>

        <a
          href="https://anpr.org.mx/resultados-de-la-convocatoria-de-sesiones-educativa-congreso-parques-2026/"
          onClick={() => setVisible(false)}
        >
          <img
            src="/assets/popup-sesiones-educativas.png"
            alt="Convocatoria Sesiones Educativas - Congreso Parques Tijuana 2026"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
        </a>
      </div>
    </div>,
    document.body
  );
}
