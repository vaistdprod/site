import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/LoadingScreen';
import Navbar from '@/components/common/Navbar';
import Error from '@/components/404/Error';

export const metadata = {
  title: '404 | TD Productions | Posouváme hranice digitální inovace',
  description: 'Tuto stránku jsme nenašli. Zkontrolujte prosím URL adresu a zkuste to znovu.',
  openGraph: {
    type: 'website',
    url: 'https://tdprod.cz/', 
    title: '404 | TD Productions | Posouváme hranice digitální inovace',
    description: 'Tuto stránku jsme nenašli. Zkontrolujte prosím URL adresu a zkuste to znovu.',
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
    title: '404 | TD Productions | Posouváme hranice digitální inovace',
    description: 'Tuto stránku jsme nenašli. Zkontrolujte prosím URL adresu a zkuste to znovu.',
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
      <Cursor />
      <ProgressScroll />
      <Lines />
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