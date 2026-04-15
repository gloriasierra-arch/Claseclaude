import { Home, Star, FileText, Key } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Subsidy = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
};

const subsidies: Subsidy[] = [
  {
    icon: Home,
    title: "Subsidio DS19",
    description: "Para familias de clase media. Financiamiento hasta 500 UF.",
    color: "#3200c1",
  },
  {
    icon: Star,
    title: "Subsidio DS1",
    description: "Para sectores vulnerables. Cobertura total del valor del inmueble.",
    color: "#10b981",
  },
  {
    icon: FileText,
    title: "Subsidio Tasa",
    description: "Reduce la tasa de tu crédito hipotecario. Ahorra millones.",
    color: "#f59e0b",
  },
  {
    icon: Key,
    title: "Leasing Habitacional",
    description: "Arrienda con opción a compra. Ideal si no tienes pie.",
    color: "#ef4444",
  },
];

export default function SubsidyBanner() {
  return (
    <section id="subsidios" className="bg-gray-light py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-primary/10 text-primary font-bold text-xs px-3 py-1 rounded-full mb-3">
            FINANCIAMIENTO
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
            Subsidios disponibles en Coquimbo
          </h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            El MINVU ofrece distintos subsidios para ayudarte a comprar tu departamento.
            Consulta cuál aplica para ti.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {subsidies.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer border-t-4"
                style={{ borderTopColor: s.color }}
              >
                <div className="mb-3 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${s.color}18` }}>
                  <Icon size={22} style={{ color: s.color }} />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.description}</p>
                <button
                  className="mt-4 text-xs font-bold underline"
                  style={{ color: s.color }}
                >
                  Más información →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
