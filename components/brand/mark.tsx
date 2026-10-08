import { cn } from "@/lib/utils"

/*
 * Знак «40» — монограмма ЧО (Чумаченко Олег).
 * Геометрия собрана по листу 01 брендбука «Студия 40»: сетка 480×260,
 * вертикали 42/46, горизонтали 10, скругления 59.5 и 39.
 * Заливка — currentColor, поэтому знак принимает цвет контекста
 * (на тёмном — светлый, на светлом — графит).
 */

/** Соотношение сторон знака (480 × 260). */
export const MARK_RATIO = 480 / 260

/** Пути знака в системе координат 480×260. */
const MARK_PATHS = [
  "M0 5H41.5V131A39 39 0 0 0 80.5 170H167V70L212 3V255H167V180H59.5A59.5 59.5 0 0 1 0 120.5Z",
  "M243 130A118.5 130 0 0 0 480 130A118.5 130 0 0 0 243 130ZM287 130A74.5 120 0 0 0 436 130A74.5 120 0 0 0 287 130Z",
]

type BrandMarkProps = {
  /** Высота знака в px (ширина считается по соотношению 480:260). */
  height?: number
  /**
   * Утолщение контура. Включается на малых размерах (иконки, favicon),
   * чтобы тонкие штрихи знака не «растворялись» при растеризации.
   */
  bold?: boolean
  /** Подпись для скринридера. `null` — знак декоративный (aria-hidden). */
  title?: string | null
  className?: string
}

export function BrandMark({
  height = 40,
  bold = false,
  title = "Студия 40 — монограмма ЧО",
  className,
}: BrandMarkProps) {
  const width = +(height * MARK_RATIO).toFixed(2)

  return (
    <svg
      viewBox="0 0 480 260"
      width={width}
      height={height}
      className={cn("shrink-0", className)}
      role={title ? "img" : undefined}
      aria-label={title ?? undefined}
      aria-hidden={title ? undefined : true}
    >
      <g
        fill="currentColor"
        stroke={bold ? "currentColor" : undefined}
        strokeWidth={bold ? 8 : undefined}
        strokeLinejoin={bold ? "round" : undefined}
      >
        <path d={MARK_PATHS[0]} />
        <path d={MARK_PATHS[1]} fillRule="evenodd" />
      </g>
    </svg>
  )
}
