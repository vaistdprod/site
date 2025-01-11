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
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P73P3DPX');
            `,
          }}
        />
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