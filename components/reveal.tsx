"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  delay?: number
  /** appearance duration in ms — overrides the global `.reveal` 0.8s */
  duration?: number
  className?: string
  as?: "div" | "section" | "article" | "li" | "a"
}

export function Reveal({ children, delay = 0, duration, className = "", as = "div", ...rest }: RevealProps & Record<string, unknown>) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const Tag = as as any

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        ...(duration ? { transitionDuration: `${duration}ms` } : {}),
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
