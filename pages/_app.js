import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { GoogleAnalytics } from "nextjs-google-analytics";
import Script from 'next/script'
import '@/styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/node_modules/github-markdown-css/github-markdown.css'
import '@/node_modules/katex/dist/katex.min.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    {/* <GoogleAnalytics trackPageViews={true}/> */}
      <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BE4X413D4Z "
          strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-BE4X413D4Z ');
        `}
      </Script>
      <Header/>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </>

  )
  
}
