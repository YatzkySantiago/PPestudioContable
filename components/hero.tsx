import { ArrowRight, MessageCircle } from "lucide-react"
import { getWhatsappUrl } from "@/lib/site-config"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Financiamiento para PyMEs · Rio Negro y Neuquén
          </span>

          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Tu PyME lista para acceder al crédito que necesita
          </h1>

          <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Confeccionamos y gestionamos tu Carpeta Bancaria Ampliada para que
            accedas de forma ágil a financiamiento bancario y SGR, con tasas
            preferenciales.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
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

        <div className="relative hidden lg:block">
          <div className="overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
            <img
              src="/hero-finance.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
