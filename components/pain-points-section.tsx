import { FileText, AlertTriangle, FileStack, Clock } from "lucide-react"

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Desconocimiento técnico",
    text: "Muchas Pymes ignoran herramientas de financiamiento como las SGR o los convenios de tasas preferenciales.",
  },
  {
    icon: Clock,
    title: "Falta de actualización",
    text: "Se recuerda la carpeta bancaria recién cuando se necesita el capital con urgencia, con balances desactualizados.",
  },
  {
    icon: FileStack,
    title: "Burocracia y deserción",
    text: "La excesiva carga documental exigida por los bancos genera frustración y abandono del proceso.",
  },
  {
    icon: FileText,
    title: "Soporte contable saturado",
    text: "Los estudios tradicionales, ocupados con impuestos, postergan la documentación financiera y pierden oportunidades.",
  },
]

export function PainPointsSection() {
  return (
    <section id="problema" className="bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Columna izquierda: título sticky que acompaña el scroll */}
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <span className="text-sm font-medium text-primary">
            El problema que resolvemos
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Los obstáculos que frenan el acceso al crédito
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Identificamos las barreras más frecuentes que enfrentan las Pymes y
            las resolvemos antes de que lleguen al evaluador de riesgo.
          </p>
        </div>

        {/* Columna derecha: tarjetas en columna unidas por una línea vertical */}
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-[1.375rem] top-4 w-px bg-border"
          />
          <ul className="flex flex-col gap-6">
            {painPoints.map((item) => (
              <li key={item.title} className="group relative flex gap-5">
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors duration-300 ease-out group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 transition-[transform,box-shadow,border-color] duration-300 ease-out will-change-transform group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/5">
                  <h3 className="text-base font-semibold text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
