"use client";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="bg-primary rounded-lg p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 9.5L12 3L21 9.5V20H15V14H9V20H3V9.5Z" fill="#37ffdb" />
            </svg>
          </div>
          <span className="text-primary font-extrabold text-xl tracking-tight">
            TOC<span className="text-[#37ffdb] bg-primary px-1 rounded">TO</span>QUIMBO
          </span>
        </a>

        {/* Nav Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
          <a href="#propiedades" className="hover:text-primary transition-colors">Propiedades</a>
          <a href="#subsidios" className="hover:text-primary transition-colors">Subsidios</a>
          <a href="#sectores" className="hover:text-primary transition-colors">Sectores</a>
          <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-bold text-primary hover:underline">Ingresar</button>
          <button className="btn-cyan text-sm">Publicar propiedad</button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
                <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
                <line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 text-sm font-semibold text-gray-700">
          <a href="#propiedades" onClick={() => setMenuOpen(false)} className="hover:text-primary">Propiedades</a>
          <a href="#subsidios" onClick={() => setMenuOpen(false)} className="hover:text-primary">Subsidios</a>
          <a href="#sectores" onClick={() => setMenuOpen(false)} className="hover:text-primary">Sectores</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)} className="hover:text-primary">Contacto</a>
          <button className="btn-cyan w-full text-sm">Publicar propiedad</button>
        </div>
      )}

      {/* Purple accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-[#37ffdb] to-primary" />
    </header>
  );
}
