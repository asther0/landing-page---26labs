export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Transforma tu Negocio Digital
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8">
            La plataforma integral que necesitas para impulsar tu presencia en lÃ­nea y alcanzar tus objetivos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#cta"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors"
            >
              Comenzar Ahora
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              Conocer más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
