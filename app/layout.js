import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'TD Productions',
  description: 'Posouváme hranice digitální inovace.',
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
        <Script
          src="https://kit.fontawesome.com/e630efef3e.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/plugins.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/TweenMax.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/charming.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/countdown.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/ScrollSmoother.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/splitting.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/isotope.pkgd.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/imagesloaded.pkgd.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/smoother-script.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/js/scripts.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}