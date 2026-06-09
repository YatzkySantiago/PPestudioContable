import { ShieldCheck, Zap, BadgePercent } from "lucide-react"

const benefits = [
  {
    icon: ShieldCheck,
    title: "Actúan como avalistas",
    text: "Las SGR garantizan ante los bancos, facilitando el acceso al crédito a las PyMEs.",
  },
  {
    icon: Zap,
    title: "Agilizan los tiempos",
    text: "Reducen los plazos de otorgamiento del financiamiento que tu empresa necesita.",
  },
  {
    icon: BadgePercent,
    title: "Tasas preferenciales",
    text: "Acceso a beneficios exclusivos, como los convenios entre SGR y Banco Patagonia en Río Negro.",
  },
]

export function SgrSection() {
  return (
    <section id="sgr" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
            <img
              src="/sgr-section.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-sm font-medium text-primary">
            Instrumento financiero
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            ¿Qué es una SGR?
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Las Sociedades de Garantía Recíproca (SGR) son entidades que actúan
            como avalistas ante los bancos. Funcionan como un respaldo que le da
            confianza al evaluador de riesgo, facilitandole a tu PyME el acceso al crédito.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            {benefits.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
