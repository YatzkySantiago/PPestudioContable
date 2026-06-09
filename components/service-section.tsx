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

export function ServiceSection() {
  return (
    <section id="servicio" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-primary">El servicio</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Una Carpeta Bancaria Ampliada que abre las puertas del crédito
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Preparamos, ordenamos y optimizamos la documentación contable y
            financiera de tu PyME para que accedas de manera ágil a créditos y
            financiamiento, ya sea a través de entidades bancarias o de
            Sociedades de Garantía Recíproca (SGR).
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            El problema que resolvemos
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4 text-base font-semibold text-card-foreground">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
