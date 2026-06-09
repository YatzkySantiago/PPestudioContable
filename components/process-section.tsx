const steps = [
  {
    title: "Relevamiento documental",
    text: "Solicitud y recopilación de la documentación base de la PyME.",
  },
  {
    title: "Análisis de balance",
    text: "Evaluación técnica del balance cerrado del último ejercicio.",
  },
  {
    title: "Cálculo de indicadores",
    text: "Obtención de índices y ratios financieros clave para determinar la salud de la empresa.",
  },
  {
    title: "Proyección financiera",
    text: "Elaboración de las estimaciones comerciales para los próximos semestres.",
  },
  {
    title: "Flujo de fondos (Cash Flow)",
    text: "Confección del flujo de caja basado en premisas como contratos vigentes o adjudicaciones cercanas.",
  },
  {
    title: "Cumplimentación de formularios",
    text: "Llenado de los formularios del banco o SGR, incluyendo la manifestación de bienes de los socios.",
  },
]

export function ProcessSection() {
  return (
    <section id="proceso" className="bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-primary">El proceso</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Un método estructurado en 6 pasos
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Ejecutamos el servicio mediante etapas claras de análisis y
            desarrollo, para que nada quede librado al azar frente al evaluador
            de riesgo.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-base font-semibold text-card-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
