import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function ServiceSection() {
  return (
    <section id="servicio" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Nosotros tenemos la solución y queremos ayudarte!
          </h2>
        </div>
        <div className="mt-12 items-start">
          {/* Columna derecha: CTA al formulario de Google */}
          <div className="flex flex-col">
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
              Completá el formulario, agendamos una sesión y te cuento como lo hacemos!
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
