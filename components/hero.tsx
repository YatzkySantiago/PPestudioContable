import { ArrowRight, MessageCircle } from "lucide-react"
import { getWhatsappUrl } from "@/lib/site-config"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:py-28">
        <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Tu PyME lista para acceder al crédito que necesita
        </h1>

        <p className="max-w-xl text-pretty text-lg font-medium leading-relaxed text-foreground sm:text-xl">
          Confeccionamos y gestionamos tu Carpeta Bancaria Ampliada para que
          accedas de forma ágil a financiamiento bancario y SGR, con tasas
          preferenciales.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              Hablar por WhatsApp
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
