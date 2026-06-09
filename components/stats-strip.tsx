"use client"

import { useEffect, useRef, useState } from "react"

type Stat = {
  prefix?: string
  value: number
  suffix?: string
  label: string
}

const stats: Stat[] = [
  { prefix: "+", value: 120, label: "Pymes que confiaron" },
  { prefix: "+$", value: 2500, suffix: "M", label: "En créditos gestionados" },
  { value: 92, suffix: "%", label: "Tasa de aprobación" },
  { value: 6, label: "Pasos de un método probado" },
]

function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || inView) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, options ?? { threshold: 0.3 })

    observer.observe(node)
    return () => observer.disconnect()
  }, [inView, options])

  return { ref, inView }
}

function CountUp({ value, start }: { value: number; start: boolean }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!start) return

    const duration = 1600
    let frame = 0
    let rafId = 0
    let startTime: number | null = null

    const tick = (now: number) => {
      if (startTime === null) startTime = now
      const progress = Math.min((now - startTime) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) {
        rafId = requestAnimationFrame(tick)
      }
      frame++
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [start, value])

  return <>{display.toLocaleString("es-AR")}</>
}

export function StatsStrip() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section ref={ref} className="border-y border-border bg-primary">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1 py-8 text-center"
          >
            <span className="text-3xl font-semibold text-primary-foreground sm:text-4xl">
              {stat.prefix}
              <CountUp value={stat.value} start={inView} />
              {stat.suffix}
            </span>
            <span className="text-sm text-primary-foreground/80">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
