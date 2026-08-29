import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Titanic English — инициативная концепция редизайна | Олег Чумаченко',
  description:
    'Инициативная концепция редизайна лендинга онлайн-интенсива «Titanic English». Разбор структуры, визуальной системы и адаптивной вёрстки. Без запуска на реальном трафике.',
  openGraph: {
    title: 'Titanic English — инициативная концепция редизайна',
    description:
      'Из текстовой страницы — в атмосферу кинопремьеры. Инициативная концепция редизайна лендинга курса по фильму «Титаник».',
    type: 'article',
  },
}

export default function TitanicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
