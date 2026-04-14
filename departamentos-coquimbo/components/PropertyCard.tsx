import Image from "next/image";

export type Property = {
  id: number;
  name: string;
  sector: string;
  price: string;
  priceUF: string;
  bedrooms: number;
  bathrooms: number;
  sqm: number;
  image: string;
  tag?: string;
  tagColor?: string;
  hasSubsidy: boolean;
};

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="property-card group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Tags */}
        <div className="absolute top-3 left-3 flex gap-2">
          {property.tag && (
            <span
              className="tag text-white"
              style={{ backgroundColor: property.tagColor || "#3200c1" }}
            >
              {property.tag}
            </span>
          )}
          {property.hasSubsidy && (
            <span className="tag bg-[#37ffdb] text-primary">Con subsidio</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-gray-800 text-base mb-1 truncate">{property.name}</h3>

        <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{property.sector}, Coquimbo</span>
        </div>

        {/* Price */}
        <div className="mb-3">
          <p className="text-primary font-extrabold text-xl">{property.price}</p>
          <p className="text-gray-400 text-xs">{property.priceUF} UF</p>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 text-gray-500 text-sm border-t border-gray-100 pt-3">
          <span className="flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 22V8a2 2 0 012-2h14a2 2 0 012 2v14" />
              <path d="M3 11h18M11 22V11" />
            </svg>
            {property.bedrooms} dorm.
          </span>
          <span className="flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 4v16M5 8h14a2 2 0 010 4H5" />
            </svg>
            {property.bathrooms} baño{property.bathrooms > 1 ? "s" : ""}
          </span>
          <span className="flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
            </svg>
            {property.sqm} m²
          </span>
        </div>

        <button className="w-full mt-3 text-sm font-bold text-primary border-2 border-primary rounded-lg py-2 hover:bg-primary hover:text-white transition-colors duration-200">
          Ver detalle
        </button>
      </div>
    </div>
  );
}
