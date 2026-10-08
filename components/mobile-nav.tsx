"use client"

import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

type NavItem = { label: string; href: string }

/*
 * Мобильное меню шапки: бургер + выпадающая панель под хедером.
 * Видно только до sm/md — на больших экранах работает обычный <nav>.
 * Панель позиционируется от хедера (position: sticky → containing block).
 */
export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)

  // Закрытие по Escape и по клику мимо панели.
  useEffect(() => {
    if (!open) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }

    document.addEventListener("keydown", onKey)
    document.addEventListener("pointerdown", onPointerDown)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("pointerdown", onPointerDown)
    }
  }, [open])

  return (
    <div ref={rootRef} className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="text-foreground hover:bg-muted"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={open}
        aria-controls="site-mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </Button>

      {open ? (
        <nav
          id="site-mobile-nav"
          aria-label="Основная навигация"
          className="absolute inset-x-0 top-full animate-in border-b border-border/60 bg-background px-6 py-3 duration-200 fade-in slide-in-from-top-2 motion-reduce:animate-none"
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base text-[#D2C8BA] transition-colors hover:bg-muted hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </div>
  )
}
