import { ArrowRight, FileText } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:py-28">
        <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Tu PyME lista para acceder al crédito que necesita
        </h1>

        <p className="max-w-xl text-pretty text-lg font-medium leading-relaxed text-foreground sm:text-xl">
          Con nuestro método único confeccionamos y gestionamos tu Carpeta Bancaria Ampliada para que accedas de forma ágil y simple al financiamiento
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.formUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <FileText className="h-4 w-4" />
              Completar el formulario
            </a>
            <a
              href="#servicio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Conocer el servicio
              <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
