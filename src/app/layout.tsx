import type { Metadata } from 'next'
import Providers from '@/components/Providers'

import './globals.css'

export const metadata: Metadata = {
	title: 'NextMatch',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
        <Providers>
          {children}          
        </Providers>
      </body>
		</html>
	)
}
