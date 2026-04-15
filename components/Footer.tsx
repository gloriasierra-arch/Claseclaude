import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white shadow-sm">
      {/* Purple accent bar (top, mismo que header) */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-[#37ffdb] to-primary" />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-primary rounded-lg p-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3 9.5L12 3L21 9.5V20H15V14H9V20H3V9.5Z" fill="#37ffdb" />
                </svg>
              </div>
              <span className="text-primary font-extrabold text-lg tracking-tight">
                TOC<span className="text-[#37ffdb] bg-primary px-1 rounded">TO</span>QUIMBO
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              La plataforma #1 para encontrar departamentos baratos en Coquimbo y la IV Región.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-sm mb-3 text-gray-700">Propiedades</h4>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Venta</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Arriendo</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Con subsidio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Nuevos proyectos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-3 text-gray-700">Sectores</h4>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Barrio Industrial</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">El Faro</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Las Higueras</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tierras Blancas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-3 text-gray-700">Contacto</h4>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm">
              <li className="flex items-center gap-2"><MapPin size={14} className="shrink-0" /> Coquimbo, IV Región</li>
              <li className="flex items-center gap-2"><Phone size={14} className="shrink-0" /> +56 9 1234 5678</li>
              <li className="flex items-center gap-2"><Mail size={14} className="shrink-0" /> info@toctoquimbo.cl</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-gray-400 text-xs">
          <p>© 2025 TOCTOQUIMBO. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Términos</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
