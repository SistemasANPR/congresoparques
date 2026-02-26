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
        animation: "popupOverlayIn 0.3s ease forwards",
      }}
      onClick={() => setVisible(false)}
    >
      <style>{`
        @keyframes popupOverlayIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes popupBounceIn {
          0%   { opacity: 0; transform: scale(0.7) translateY(40px); }
          60%  { opacity: 1; transform: scale(1.04) translateY(-6px); }
          80%  { transform: scale(0.97) translateY(3px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes popupFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        .popup-modal {
          animation: popupBounceIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
        .popup-modal:hover {
          animation: popupBounceIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards,
                     popupFloat 3s ease-in-out 0.5s infinite;
        }
        .popup-close-btn:hover {
          background: rgba(0,0,0,0.8) !important;
          transform: scale(1.1);
        }
      `}</style>

      <div
        className="popup-modal"
        style={{
          position: "relative",
          width: "min(90vw, 400px)",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)",
          background: "#ffffff",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="popup-close-btn"
          onClick={() => setVisible(false)}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 10,
            background: "rgba(0,0,0,0.5)",
            border: "2px solid rgba(255,255,255,0.4)",
            borderRadius: "50%",
            width: "34px",
            height: "34px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#fff",
            transition: "background 0.2s, transform 0.2s",
          }}
          aria-label="Cerrar"
        >
          <X size={18} />
        </button>

        <a
          href="https://anpr.org.mx/resultados-de-la-convocatoria-de-sesiones-educativa-congreso-parques-2026/"
          onClick={() => setVisible(false)}
          style={{ display: "block", background: "#ffffff" }}
        >
          <img
            src="/assets/popup-sesiones-educativas.png"
            alt="Convocatoria Sesiones Educativas - Congreso Parques Tijuana 2026"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              background: "#ffffff",
            }}
          />
        </a>
      </div>
    </div>,
    document.body
  );
}
