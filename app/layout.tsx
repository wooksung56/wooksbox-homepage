import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '욱스박스 | WOOK\'s BOX',
  description: '끝까지 책임지는 패키지 파트너. 빠른 납기, 안전재고, 소량 제작, 전국 납품.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
