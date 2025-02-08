import ProgressScroll from '@/components/common/progress-scroll/ProgressScroll';

import LoadingScreen from '@/components/common/loading-screen/LoadingScreen';
import Navbar from '@/components/common/navbar/Navbar';
import Error from '@/components/404/Error';

export const metadata = {
  title: 'Chyba 404 | TD Productions | Posouváme hranice digitální inovace',
  description: 'Tato stránka na našem webu neexistuje. Zkontrolujte prosím URL adresu, případně nám napište, pokud myslíte, že jde o chybu.',
  openGraph: {
    type: 'website',
    url: 'https://tdprod.cz/', 
    title: 'Chyba 404 | TD Productions | Posouváme hranice digitální inovace',
    description: 'Tato stránka na našem webu neexistuje. Zkontrolujte prosím URL adresu, případně nám napište, pokud myslíte, že jde o chybu.',
    images: [
      {
        url: 'https://tdprod.cz/assets/imgs/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TD Productions, úvodní fotka'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chyba 404 | TD Productions | Posouváme hranice digitální inovace',
    description: 'Tato stránka na našem webu neexistuje. Zkontrolujte prosím URL adresu, případně nám napište, pokud myslíte, že jde o chybu.',
    images: ['https://tdprod.cz/assets/imgs/og-image.jpg']
  },
  alternates: {
    canonical: 'https://tdprod.cz/'
  }
}

export default function Home() {
  return (
    <>
      <LoadingScreen />

      <ProgressScroll />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Error />
          </main>
        </div>
      </div>
    </>
  );
}