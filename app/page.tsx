import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { StatsStrip } from "@/components/stats-strip"
import { ServiceSection } from "@/components/service-section"
import { ProcessSection } from "@/components/process-section"
import { SgrSection } from "@/components/sgr-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <StatsStrip />
        <ServiceSection />
        <ProcessSection />
        <SgrSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
