import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Titanic English — редизайн лендинга | Кейс Олега Чумаченко',
  description:
    'Кейс: как редизайн лендинга онлайн-курса «Titanic English» превратил перегруженную страницу в премиальный, кинематографичный интенсив с высокой конверсией.',
  openGraph: {
    title: 'Titanic English — редизайн лендинга',
    description:
      'Из сухого конспекта — в кинопремьеру. Кейс по редизайну лендинга онлайн-курса по фильму «Титаник».',
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
