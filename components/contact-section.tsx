"use client"

import { useRef, useState } from "react"
import { MessageCircle, Mail, MapPin, Phone, Send } from "lucide-react"
import { getWhatsappUrl, siteConfig } from "@/lib/site-config"

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  })
  // Honeypot: a field hidden from humans. Bots tend to fill every field.
  const [honeypot, setHoneypot] = useState("")
  // Timestamp of when the form mounted, to reject near-instant (bot) submits.
  const mountedAt = useRef(Date.now())

  function handleWhatsappSubmit(e: React.FormEvent) {
    e.preventDefault()

    // If the hidden field was filled, or the form was submitted suspiciously
    // fast (< 2s), treat it as spam and silently ignore.
    if (honeypot.trim() !== "" || Date.now() - mountedAt.current < 2000) {
      return
    }

    const text = `Hola, soy ${form.name || "[nombre]"}${
      form.company ? ` de ${form.company}` : ""
    }. ${form.message || siteConfig.whatsappMessage}`
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
      text,
    )}`
    window.open(url, "_blank")
  }

  return (
    <section id="contacto" className="bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="text-sm font-medium text-primary">Contacto</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Conversemos sobre tu Pyme
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Dejanos tus datos y te contactamos para analizar tu caso, o
            escribinos directamente por WhatsApp para una respuesta inmediata.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              Escribir por WhatsApp
            </a>

            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                {siteConfig.phone}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                {siteConfig.email}
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                {siteConfig.address}
              </li>
            </ul>
          </div>
        </div>

        <form
          onSubmit={handleWhatsappSubmit}
          className="rounded-2xl border border-border bg-card p-6 sm:p-8"
        >
          <div className="flex flex-col gap-4">
            <Field
              label="Nombre y apellido"
              id="name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              placeholder="Juan Pérez"
            />
            <Field
              label="Empresa"
              id="company"
              value={form.company}
              onChange={(v) => setForm({ ...form, company: v })}
              placeholder="Mi Pyme S.A.S."
            />
            <Field
              label="Email"
              id="email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              placeholder="juan@miempresa.com"
            />
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Contanos brevemente sobre tu necesidad de financiamiento"
                className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Honeypot field: hidden from real users, only bots fill it. */}
            <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden="true">
              <label htmlFor="website">No completar este campo</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Send className="h-4 w-4" />
              Enviar consulta
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Al enviar, se abrirá WhatsApp con tu mensaje listo para mandar.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

function Field({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string
  id: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  )
}
