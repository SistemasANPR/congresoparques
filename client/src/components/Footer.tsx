import { Mail, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import logoANPRWhiteUrl from "@assets/LOGO ANPR-PERFIL-BLANCO_1758654877619.png";

export function Footer() {
  return (
    <footer id="footer" className="py-12" style={{ backgroundColor: '#0E0477', color: 'white', fontFamily: 'Montserrat, sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <a href="https://anpr.org.mx/" target="_blank" rel="noopener noreferrer">
                  <img
                    src={logoANPRWhiteUrl}
                    alt="ANPR México - Organizadores IX Congreso Internacional Parques Urbanos Espacio Público Tijuana 2026"
                    className="h-16 object-contain hover:scale-105 transition-transform"
                    data-testid="footer-logo-anpr"
                  />
                </a>
              </div>
              <p className="text-white/80 mb-4" style={{ fontWeight: 500 }}>
                Asociación Nacional de Parques y Recreación de México - Transformando espacios públicos para un futuro sostenible.
              </p>
              <div className="text-2xl" style={{ color: '#BCCE16', fontFamily: 'Antonio, sans-serif', fontWeight: 700 }} data-testid="footer-hashtag">#CongresoParques2026</div>
            </div>

            {/* Links */}
            <div>
              <h4 className="mb-4" style={{ fontWeight: 600 }}>Enlaces</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="https://anpr.org.mx/privacidad" className="hover:opacity-80 transition-colors" data-testid="footer-privacy">Políticas de privacidad</a></li>
                <li><a href="https://anpr.org.mx/terminos" className="hover:opacity-80 transition-colors" data-testid="footer-terms">Términos y condiciones</a></li>
                <li><a href="/assets/FAQ_Congreso_Parques_2026.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-colors" data-testid="footer-faq">Preguntas frecuentes</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4" style={{ fontWeight: 600 }}>Contacto</h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@anpr.org.mx" className="hover:opacity-80 transition-colors" data-testid="footer-email">info@anpr.org.mx</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="https://wa.me/529993530691" className="hover:opacity-80 transition-colors" data-testid="footer-whatsapp">+52 999 353 0691</a>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex gap-2 mt-4 -ml-2">
                <a
                  href="https://www.facebook.com/CongresoParques/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#f71cdd] active:text-[#f71cdd] transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
                  aria-label="Facebook"
                  data-testid="social-facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/congreso_parques/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#f71cdd] active:text-[#f71cdd] transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
                  aria-label="Instagram"
                  data-testid="social-instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/congreso_parque"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#f71cdd] active:text-[#f71cdd] transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
                  aria-label="X (Twitter)"
                  data-testid="social-twitter"
                >
                  <FaXTwitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC_ExzrmxP5er7qZHeVpWidQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#f71cdd] active:text-[#f71cdd] transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
                  aria-label="YouTube"
                  data-testid="social-youtube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2026 Asociación Nacional de Parques y Recreación de México. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
