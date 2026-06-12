import Image from "next/image"
import { FileText, AlertTriangle, FileStack, Clock } from "lucide-react"

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Desconocimiento técnico",
    text: "Muchas Pymes ignoran herramientas de financiamiento como las Sociedades de Garantías Recíprocas (SGR), convenios de tasas preferenciales, Centro Pymes.",
    image: "/pain-desconocimiento.png",
    alt: "Trabajador de empresa de servicios petroleros revisando documentación financiera",
  },
  {
    icon: Clock,
    title: "Falta de actualización",
    text: "Se recuerda la carpeta bancaria recién cuando se necesita hacer frente a un contrato, renovar alguna maquinaria o la compra de alguna unidad nueva.",
    image: "/pain-actualizacion.png",
    alt: "Campo petrolero al atardecer en Vaca Muerta con sensación de urgencia",
  },
  {
    icon: FileStack,
    title: "Burocracia y deserción",
    text: "La excesiva carga documental exigida por los bancos genera frustración y abandono del proceso.",
    image: "/pain-burocracia.png",
    alt: "Pilas de papeleo burocrático en un entorno industrial de petróleo y gas",
  },
  {
    icon: FileText,
    title: "Soporte contable saturado",
    text: "Los estudios tradicionales, ocupados con impuestos, postergan la documentación financiera y pierden oportunidades.",
    image: "/pain-soporte.png",
    alt: "Contador saturado de trabajo con documentos impositivos y carpetas",
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
                <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
