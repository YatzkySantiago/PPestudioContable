import { ArrowRight, FileText } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:py-28">
        <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          ¿Buscás crecer o desembarcar en Vaca Muerta?
        </h1>

        <p className="max-w-xl text-pretty text-lg font-medium leading-relaxed text-foreground sm:text-xl">
          Confeccionamos y gestionamos tu Carpeta Crediticia Ampliada para que accedas de forma ágil y simple al financiamiento
        </p>
        <div className="relative mt-6 aspect-video w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${siteConfig.youtubeId}?start=307&end=435&controls=0`}
            title="Conocé la Carpeta Bancaria Ampliada"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
