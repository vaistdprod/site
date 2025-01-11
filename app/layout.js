import './globals.css';
import Script from 'next/script';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'TD Productions | Posouváme hranice digitální inovace',
  description: 'Inovace se u nás snoubí s profesionalitou a jednohlasným zájmem posunout váš projekt na tu nejvyšší úroveň. Kontaktujte nás ještě dnes a získejte nabídku.',
  icons: {
    icon: '/assets/imgs/favicon.ico',
    shortcut: '/assets/imgs/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <head>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P73P3DPX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
        <Script
          src="https://kit.fontawesome.com/e630efef3e.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/plugins.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/ScrollSmoother.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" />
        <Script src="/assets/js/scripts.js" strategy="afterInteractive" />
        <Script
          src="//js-eu1.hs-scripts.com/145304620.js"
          id="hubspot-script-loader"
          strategy="afterInteractive"
        />
        <SpeedInsights />
      </body>
    </html>
  );
}