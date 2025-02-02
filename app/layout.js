import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import ClientScripts from "./client-scripts";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "TD Productions | Posouváme hranice digitální inovace",
  description:
    "Inovace se u nás snoubí s profesionalitou a jednohlasným zájmem posunout váš projekt na tu nejvyšší úroveň. Kontaktujte nás ještě dnes a získejte nabídku.",
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs" className={plusJakartaSans.className}>
      <head>
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        <ClientScripts />
      </body>
    </html>
  );
}