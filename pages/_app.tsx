import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

// import { SessionProvider } from "next-auth/react"

// export default function App({
//   Component, pageProps: { session, ...pageProps }
// }) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps}/>
//     </SessionProvider>
//   )
// }
