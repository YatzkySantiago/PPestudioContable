import Image from "next/image"
import { FileText, AlertTriangle, FileStack, Clock } from "lucide-react"

const painPoints = [
  {
    icon: AlertTriangle,
    title: "",
    text: "Muchas Pymes ignoran herramientas de financiamiento como las Sociedades de Garantías Recíprocas (SGR), Fondos de Garantías Provinciales y Convenios Provinciales de tasas preferenciales.",
    image: "/pain1A.webp",
    imageTop: "/pain1B.webp",
    alt: "Equipos de trabajo de Pymes de servicios realizando sus tareas",
  },
  {
    icon: Clock,
    title: "",
    text: "Se recuerda la carpeta bancaria recién cuando se necesita hacer frente a un contrato, renovar alguna maquinaria o la compra de alguna unidad nueva.",
    image: "/pain2.webp",
    alt: "Camioneta de servicios estacionada junto a una torre de perforación petrolera en Vaca Muerta",
  },
  {
    icon: FileStack,
    title: "",
    text: "La excesiva carga documental exigida por los bancos genera frustración y abandono del proceso.",
    image: "/pain3.webp",
    alt: "Pilas de documentación y formularios sobre un escritorio con casco de obra y una refinería al fondo",
  },
  {
    icon: FileText,
    title: "",
    text: "Los estudios tradicionales, ocupados con impuestos, postergan la documentación financiera y pierden oportunidades.",
    image: "/pain4.webp",
    alt: "Hombre de traje abrumado frente a documentos financieros y una calculadora en una oficina",
  },
]

export function PainPointsSection() {
  return (
    <section id="problema" className="bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[transform,box-shadow,border-color] duration-300 ease-out will-change-transform hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {item.imageTop && (
                  <Image
                    src={item.imageTop || "/placeholder.svg"}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="animate-pain-crossfade object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                )}
                <div className="absolute left-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-center text-sm font-bold leading-relaxed text-card-foreground">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
