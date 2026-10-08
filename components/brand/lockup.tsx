import type { CSSProperties } from "react"

import { cn } from "@/lib/utils"
import { BrandMark, MARK_RATIO } from "@/components/brand/mark"

/*
 * Логотип «Студия 40» — слово «СТУДИЯ» + знак ЧО.
 *
 * vertical  (основной, лист 02 №01): «С Т У Д И Я» сверху, растянуто
 *           по ширине знака; знак ЧО — снизу, крупный.
 * horizontal (лист 02 №02/№03, резерв): «С Т У Д И Я» слева, знак ЧО
 *           справа, выровнен по нижней границе надписи.
 *
 * Все размеры выводятся из высоты знака (`height`), поэтому связка
 * масштабируется одним числом и сохраняет пропорции брендбука.
 */

const LETTERS = ["С", "Т", "У", "Д", "И", "Я"] as const

/** Доля высоты знака для кегля надписи в вертикальной связке. */
const VERTICAL_TEXT_RATIO = 0.272
/** Доля высоты знака для отбивки между надписью и знаком. */
const VERTICAL_GAP_RATIO = 0.145
/** Доля высоты знака для отбивки в горизонтальной связке. */
const HORIZONTAL_GAP_RATIO = 0.6

/**
 * Слово «СТУДИЯ» отдельными буквами (нужны раздельные flex-элементы,
 * чтобы работала разрядка/растяжка).
 * - spread — буквы распределяются ровно по ширине контейнера (space-between);
 * - иначе — натуральная ширина с трекингом 0.18em (компенсация хвостового
 *   пробела отрицательным margin-right).
 */
function Wordmark({
  fontSize,
  spread = false,
  className,
  style,
}: {
  fontSize: number
  spread?: boolean
  className?: string
  style?: CSSProperties
}) {
  return (
    <div
      className={cn("flex", spread ? "w-full justify-between" : "w-auto", className)}
      style={{
        fontSize,
        lineHeight: 1,
        ...(spread ? null : { letterSpacing: "0.18em", marginRight: "-0.18em" }),
        ...style,
      }}
      aria-hidden="true"
    >
      {LETTERS.map((letter) => (
        <span key={letter}>{letter}</span>
      ))}
    </div>
  )
}

type BrandLockupProps = {
  variant?: "vertical" | "horizontal"
  /** Высота знака ЧО в px. */
  height?: number
  /** Кегль надписи «СТУДИЯ» в px (по умолчанию — из пропорций бренда/листа 02). */
  textSize?: number
  /** Утолщение контура знака (для малых размеров). */
  bold?: boolean
  className?: string
}

export function BrandLockup({
  variant = "vertical",
  height = 40,
  textSize,
  bold = false,
  className,
}: BrandLockupProps) {
  const markWidth = +(height * MARK_RATIO).toFixed(2)

  if (variant === "horizontal") {
    const fontSize = textSize ?? height * 0.875
    return (
      <div
        className={cn("flex items-end", className)}
        style={{ gap: +(height * HORIZONTAL_GAP_RATIO).toFixed(2) }}
      >
        <Wordmark fontSize={fontSize} />
        <BrandMark height={height} bold={bold} title={null} />
      </div>
    )
  }

  const fontSize = textSize ?? height * VERTICAL_TEXT_RATIO
  return (
    <div
      className={cn("flex flex-col items-center", className)}
      style={{ width: markWidth, gap: +(height * VERTICAL_GAP_RATIO).toFixed(2) }}
    >
      <Wordmark fontSize={fontSize} spread />
      <BrandMark height={height} bold={bold} title={null} />
    </div>
  )
}
