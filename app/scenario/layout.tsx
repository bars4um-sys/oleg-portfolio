import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Кейс: лендинг курса «Адаптированный сценарий» — Олег Чумаченко',
  description:
    'Как из одного Word-документа с программой курса родился рабочий лендинг course.kinomagica.ru: разбор процесса, структуры и результата.',
  openGraph: {
    title: 'Кейс: лендинг курса «Адаптированный сценарий»',
    description:
      'Из программы курса — в продающий лендинг. Разбор процесса, структуры и результата.',
    type: 'article',
  },
}

export default function ScenarioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
