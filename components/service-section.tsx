import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function ServiceSection() {
  return (
    <section id="servicio" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">El servicio</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            ¿Buscás crecer o desembarcar en Vaca Muerta?
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Nosotros tenemos la solución y queremos ayudarte
          </p>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Columna izquierda: video explicativo de YouTube */}
          <div className="flex flex-col">
            <p className="text-sm text-muted-foreground">
              Mirá el video para más información
            </p>
            <div className="relative mt-4 aspect-video overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${siteConfig.youtubeId}`}
                title="Conocé la Carpeta Bancaria Ampliada"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Columna derecha: CTA al formulario de Google */}
          <div className="flex flex-col">
            {/* Subtítulo invisible para alinear la tarjeta con el alto del video */}
            <p aria-hidden="true" className="invisible hidden text-sm lg:block">
              &nbsp;
            </p>
            <div
              id="contacto"
              className="group relative mt-4 flex scroll-mt-24 flex-col justify-center overflow-hidden rounded-2xl border border-border bg-card p-8 text-left transition-[transform,box-shadow,border-color] duration-300 ease-out will-change-transform hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/10 sm:px-12 lg:aspect-video lg:p-8"
            >
            {/* Acento dorado superior */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-accent" aria-hidden="true" />
            <h3 className="text-balance text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Dá el primer paso hacia tu financiamiento
            </h3>
            <p className="mx-auto mt-3 max-w-md text-pretty text-center text-base leading-relaxed text-muted-foreground">
              Completa el formulario, agendamos un sesión y te cuento como lo hacemos!!
            </p>
            <a
              href={siteConfig.formUrl}
              target="_blank"
              rel="noreferrer"
              className="mx-auto mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Completar el formulario
              <ArrowRight className="h-5 w-5" />
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
