"use client";
import { useState } from "react";

export default function Hero() {
  const [search, setSearch] = useState("");
  const [tipo, setTipo] = useState("todos");
  const [hovered, setHovered] = useState(false);

  const cyan = hovered ? "#3200c1" : "#37ffdb";

  return (
    <section
      className="relative overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: hovered ? "#F37C9F" : "#3200c1" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full -translate-y-1/2 translate-x-1/3 transition-colors duration-500" style={{ backgroundColor: cyan }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full translate-y-1/2 -translate-x-1/4 transition-colors duration-500" style={{ backgroundColor: cyan }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 font-bold text-xs px-3 py-1 rounded-full mb-4 transition-colors duration-500"
            style={{ backgroundColor: cyan, color: hovered ? "#ffffff" : "#3200c1" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            Precios desde 800 UF en Coquimbo
          </span>

          <h1 className="text-white font-extrabold text-3xl md:text-5xl leading-tight mb-4">
            Encuentra tu departamento<br />
            <span className="transition-colors duration-500" style={{ color: cyan }}>barato en Coquimbo</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg mb-8 max-w-xl">
            Más de 120 departamentos disponibles con subsidio habitacional, financiamiento y excelente ubicación en la IV Región.
          </p>

          {/* Search box */}
          <div className="bg-white rounded-2xl p-4 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-3">
              {/* Tipo */}
              <select
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/30 md:w-44"
              >
                <option value="todos">Todos los tipos</option>
                <option value="arriendo">Arriendo</option>
                <option value="venta">Venta</option>
                <option value="subsidio">Con subsidio</option>
              </select>

              {/* Search input */}
              <div className="relative flex-1">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  placeholder="Busca por sector, proyecto o precio..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <button className="btn-primary text-sm whitespace-nowrap">
                Buscar
              </button>
            </div>

            {/* Quick filters */}
            <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100">
              <span className="text-xs text-gray-500 self-center font-semibold">Populares:</span>
              {["Barrio Industrial", "El Faro", "Las Higueras", "Sindempart"].map((tag) => (
                <button
                  key={tag}
                  className="text-xs bg-gray-100 hover:bg-primary hover:text-white text-gray-600 font-semibold px-3 py-1 rounded-full transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative bg-white/10 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-3 md:grid-cols-3 gap-4 text-center">
          {[
            { value: "120+", label: "Departamentos" },
            { value: "desde 800 UF", label: "Precio mínimo" },
            { value: "6 sectores", label: "En Coquimbo" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-extrabold text-lg md:text-2xl transition-colors duration-500" style={{ color: cyan }}>{stat.value}</p>
              <p className="text-white/70 text-xs md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
