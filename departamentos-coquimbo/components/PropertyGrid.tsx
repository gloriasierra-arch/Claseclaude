"use client";
import { useState } from "react";
import { SearchX } from "lucide-react";
import PropertyCard, { type Property } from "./PropertyCard";
import FilterBar from "./FilterBar";

const ALL_PROPERTIES: Property[] = [
  {
    id: 1,
    name: "Proyecto Eco Barrio Industrial",
    sector: "Barrio Industrial",
    price: "$45.000.000",
    priceUF: "847",
    bedrooms: 1,
    bathrooms: 1,
    sqm: 38,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    tag: "NUEVO",
    tagColor: "#10b981",
    hasSubsidy: true,
  },
  {
    id: 2,
    name: "Condominio Las Higueras II",
    sector: "Las Higueras",
    price: "$65.000.000",
    priceUF: "1.223",
    bedrooms: 2,
    bathrooms: 1,
    sqm: 52,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    tag: "OFERTA",
    tagColor: "#ef4444",
    hasSubsidy: true,
  },
  {
    id: 3,
    name: "Torres El Faro",
    sector: "El Faro",
    price: "$78.000.000",
    priceUF: "1.467",
    bedrooms: 2,
    bathrooms: 2,
    sqm: 60,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
    hasSubsidy: false,
  },
  {
    id: 4,
    name: "Residencial Sindempart",
    sector: "Sindempart",
    price: "$52.000.000",
    priceUF: "978",
    bedrooms: 2,
    bathrooms: 1,
    sqm: 48,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80",
    tag: "ÚLTIMO",
    tagColor: "#f59e0b",
    hasSubsidy: true,
  },
  {
    id: 5,
    name: "Parque Tierras Blancas",
    sector: "Tierras Blancas",
    price: "$95.000.000",
    priceUF: "1.787",
    bedrooms: 3,
    bathrooms: 2,
    sqm: 75,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    hasSubsidy: false,
  },
  {
    id: 6,
    name: "Edificio Pan de Azúcar",
    sector: "Pan de Azúcar",
    price: "$42.000.000",
    priceUF: "790",
    bedrooms: 1,
    bathrooms: 1,
    sqm: 35,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
    tag: "NUEVO",
    tagColor: "#10b981",
    hasSubsidy: true,
  },
  {
    id: 7,
    name: "Conjunto Habitacional Coquimbo Norte",
    sector: "Barrio Industrial",
    price: "$58.000.000",
    priceUF: "1.091",
    bedrooms: 2,
    bathrooms: 1,
    sqm: 50,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    hasSubsidy: true,
  },
  {
    id: 8,
    name: "Portal Las Higueras",
    sector: "Las Higueras",
    price: "$110.000.000",
    priceUF: "2.070",
    bedrooms: 3,
    bathrooms: 2,
    sqm: 82,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
    hasSubsidy: false,
  },
];

type Filters = {
  bedrooms: string;
  priceMax: string;
  sector: string;
  order: string;
};

export default function PropertyGrid() {
  const [filters, setFilters] = useState<Filters>({
    bedrooms: "todos",
    priceMax: "todos",
    sector: "todos",
    order: "reciente",
  });

  const filtered = ALL_PROPERTIES.filter((p) => {
    if (filters.bedrooms !== "todos" && p.bedrooms !== Number(filters.bedrooms)) return false;
    if (filters.sector !== "todos" && p.sector !== filters.sector) return false;
    if (filters.priceMax !== "todos" && Number(p.priceUF.replace(".", "")) > Number(filters.priceMax)) return false;
    return true;
  }).sort((a, b) => {
    if (filters.order === "precio_asc") return Number(a.priceUF.replace(".", "")) - Number(b.priceUF.replace(".", ""));
    if (filters.order === "precio_desc") return Number(b.priceUF.replace(".", "")) - Number(a.priceUF.replace(".", ""));
    if (filters.order === "m2") return b.sqm - a.sqm;
    return a.id - b.id;
  });

  return (
    <section id="propiedades">
      <FilterBar total={filtered.length} onFilter={setFilters} />
      <div className="max-w-7xl mx-auto px-4 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <SearchX size={56} className="mx-auto mb-4 text-gray-300" />
            <p className="text-lg font-semibold">No encontramos propiedades con esos filtros</p>
            <p className="text-sm mt-1">Intenta ajustar los filtros de búsqueda</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
