import AppShell from '@/components/layouts/AppShell'
import Navbar from '@/components/layouts/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
// import { Provider } from "next-auth/client"
export default function App({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
    </SessionProvider>
  )
}
