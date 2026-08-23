import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Кейс: инвест-питч-дек «Мир кунфу» — Олег Чумаченко',
  description:
    'Как стратегия документальной медиа-экосистемы «Мир кунфу» превратилась в 12-слайдовый инвест-питч-дек: нарративная архитектура, дизайн-система и запоминающийся визуальный язык.',
  openGraph: {
    title: 'Кейс: инвест-питч-дек «Мир кунфу»',
    description:
      'Из стратегии проекта — в историю для инвесторов. Разбор процесса, структуры и результата.',
    type: 'article',
  },
}

export default function KunfuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}