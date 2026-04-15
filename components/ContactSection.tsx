"use client";
import { useState } from "react";
import { CheckCircle2, PartyPopper } from "lucide-react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="inline-block bg-[#37ffdb] text-primary font-bold text-xs px-3 py-1 rounded-full mb-4">
              CONTACTO
            </span>
            <h2 className="text-white font-extrabold text-2xl md:text-4xl mb-4">
              ¿Listo para encontrar<br />tu departamento ideal?
            </h2>
            <p className="text-white/70 mb-6">
              Déjanos tus datos y un ejecutivo especializado te contactará en menos de 24 horas
              con las mejores opciones según tu presupuesto.
            </p>
            <div className="flex flex-col gap-3 text-white/80 text-sm">
              {[
                "Asesoría gratuita y sin compromisos",
                "Te ayudamos con el proceso de subsidio",
                "Visitas coordinadas a proyectos",
              ].map((text) => (
                <span key={text} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#37ffdb] shrink-0" />
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            {sent ? (
              <div className="text-center py-8">
                <div className="flex justify-center mb-4">
                  <PartyPopper size={48} className="text-primary" />
                </div>
                <h3 className="font-extrabold text-gray-800 text-lg">¡Mensaje enviado!</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Te contactaremos en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="font-extrabold text-gray-800 text-lg">Solicita información</h3>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  required
                  className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <input
                  type="tel"
                  placeholder="Teléfono (ej: +56 9 1234 5678)"
                  required
                  className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  required
                  className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/30">
                  <option value="">¿Qué buscas?</option>
                  <option>1 dormitorio</option>
                  <option>2 dormitorios</option>
                  <option>3 dormitorios</option>
                  <option>Con subsidio</option>
                </select>
                <textarea
                  placeholder="Comentarios o consultas (opcional)"
                  rows={3}
                  className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                />
                <button type="submit" className="btn-primary w-full py-3">
                  Solicitar información gratuita
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Tus datos están protegidos. No enviamos spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
