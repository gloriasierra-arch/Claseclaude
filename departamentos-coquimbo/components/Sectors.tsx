import { Factory, Waves, Trees, Building2, Sailboat, Mountain } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Sector = {
  name: string;
  count: number;
  icon: LucideIcon;
};

const sectors: Sector[] = [
  { name: "Barrio Industrial", count: 28, icon: Factory },
  { name: "El Faro", count: 15, icon: Waves },
  { name: "Las Higueras", count: 22, icon: Trees },
  { name: "Sindempart", count: 19, icon: Building2 },
  { name: "Tierras Blancas", count: 31, icon: Sailboat },
  { name: "Pan de Azúcar", count: 12, icon: Mountain },
];

export default function Sectors() {
  return (
    <section id="sectores" className="max-w-7xl mx-auto px-4 py-14">
      <div className="text-center mb-10">
        <span className="inline-block bg-primary/10 text-primary font-bold text-xs px-3 py-1 rounded-full mb-3">
          SECTORES
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
          Explora por sector en Coquimbo
        </h2>
        <p className="text-gray-500 mt-2">
          Cada sector tiene su propio carácter. Descubre cuál es ideal para ti.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {sectors.map((s) => {
          const Icon = s.icon;
          return (
            <button
              key={s.name}
              className="group flex flex-col items-center p-5 bg-white rounded-xl border-2 border-gray-100 hover:border-primary hover:shadow-lg transition-all duration-200"
            >
              <div className="mb-2 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-200">
                <Icon size={20} className="text-primary group-hover:text-white transition-colors duration-200" />
              </div>
              <span className="font-bold text-gray-700 text-sm text-center group-hover:text-primary transition-colors">
                {s.name}
              </span>
              <span className="text-xs text-gray-400 mt-1">{s.count} deptos.</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
