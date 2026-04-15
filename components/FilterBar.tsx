"use client";
import { useState } from "react";

type FilterBarProps = {
  total: number;
  onFilter: (filters: { bedrooms: string; priceMax: string; sector: string; order: string }) => void;
};

export default function FilterBar({ total, onFilter }: FilterBarProps) {
  const [bedrooms, setBedrooms] = useState("todos");
  const [priceMax, setPriceMax] = useState("todos");
  const [sector, setSector] = useState("todos");
  const [order, setOrder] = useState("reciente");

  const handleChange = (field: string, value: string) => {
    const updates = { bedrooms, priceMax, sector, order, [field]: value };
    if (field === "bedrooms") setBedrooms(value);
    if (field === "priceMax") setPriceMax(value);
    if (field === "sector") setSector(value);
    if (field === "order") setOrder(value);
    onFilter(updates);
  };

  return (
    <div className="bg-white border-b border-gray-200 sticky top-[57px] z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center gap-3">
        <p className="text-sm font-bold text-gray-700 shrink-0">
          <span className="text-primary">{total}</span> propiedades
        </p>

        <div className="flex flex-wrap gap-2 flex-1">
          {/* Dormitorios */}
          <select
            value={bedrooms}
            onChange={(e) => handleChange("bedrooms", e.target.value)}
            className="filter-select"
          >
            <option value="todos">Dormitorios</option>
            <option value="1">1 dormitorio</option>
            <option value="2">2 dormitorios</option>
            <option value="3">3 dormitorios</option>
          </select>

          {/* Precio max */}
          <select
            value={priceMax}
            onChange={(e) => handleChange("priceMax", e.target.value)}
            className="filter-select"
          >
            <option value="todos">Precio máximo</option>
            <option value="1000">Hasta 1.000 UF</option>
            <option value="1500">Hasta 1.500 UF</option>
            <option value="2000">Hasta 2.000 UF</option>
            <option value="3000">Hasta 3.000 UF</option>
          </select>

          {/* Sector */}
          <select
            value={sector}
            onChange={(e) => handleChange("sector", e.target.value)}
            className="filter-select"
          >
            <option value="todos">Todos los sectores</option>
            <option value="Barrio Industrial">Barrio Industrial</option>
            <option value="El Faro">El Faro</option>
            <option value="Las Higueras">Las Higueras</option>
            <option value="Sindempart">Sindempart</option>
            <option value="Tierras Blancas">Tierras Blancas</option>
            <option value="Pan de Azúcar">Pan de Azúcar</option>
          </select>
        </div>

        {/* Orden */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-gray-500 font-semibold hidden md:block">Ordenar:</span>
          <select
            value={order}
            onChange={(e) => handleChange("order", e.target.value)}
            className="filter-select"
          >
            <option value="reciente">Más reciente</option>
            <option value="precio_asc">Menor precio</option>
            <option value="precio_desc">Mayor precio</option>
            <option value="m2">Mayor m²</option>
          </select>
        </div>
      </div>

      <style jsx>{`
        .filter-select {
          border: 1.5px solid #e5e7eb;
          border-radius: 8px;
          padding: 6px 12px;
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          background: white;
          cursor: pointer;
          outline: none;
          transition: border-color 0.2s;
        }
        .filter-select:focus {
          border-color: #3200c1;
        }
      `}</style>
    </div>
  );
}
