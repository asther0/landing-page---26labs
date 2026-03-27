const features = [
  {
    title: "RÃ¡pido y Eficiente",
    description: "Optimizado para brindarte la mejor experiencia con tiempos de carga ultrarrÃ¡pidos",
    icon: "✨",
  },
  {
    title: "FÃ¡cil de Usar",
    description: "Interfaz intuitiva diseÃ±ada para que cualquiera pueda comenzar sin complicaciones",
    icon: "🚀",
  },
  {
    title: "Soporte Confiable",
    description: "Equipo dedicado disponible para ayudarte en cada paso del camino",
    icon: "💡",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            CaracterÃ­sticas Destacadas
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Todo lo que necesitas en un solo lugar
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
