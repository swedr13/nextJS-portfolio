import LoginButton from "@/app/components/LoginButton"
import { SessionProvider } from "next-auth/react"

export default function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps },
 }) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <LoginButton />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
