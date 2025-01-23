import Lines from '@/components/common/Lines'
import ProgressScroll from '@/components/common/ProgressScroll'
import Cursor from '@/components/common/Cursor'
import LoadingScreen from '@/components/common/LoadingScreen'
import Footer from '@/components/common/Footer'
import Marq2 from '@/components/common/Marq2'
import Feat from '@/components/home/Feat'
import Marq from '@/components/common/Marq'
import Navbar from '@/components/common/Navbar'
import Services from '@/components/home/Services'
import Portfolio from '@/components/home/Portfolio'
import Team from '@/components/home/Team'
// import Testimonials from '@/components/home/Testimonials'
// import Clients from '@/components/home/Clients'
import Blog from '@/components/home/Blog'
import Header from '@/components/home/Header'
import About from '@/components/home/About'
import { getAllPosts } from '@/lib/posts'
import { getMemberList } from "@/lib/team"
import { getLightServices } from '@/lib/services'

export const metadata = {
  title: 'TD Productions | Posouváme hranice digitální inovace',
  description: 'Inovace se u nás snoubí s profesionalitou a jednohlasným zájmem posunout váš projekt na tu nejvyšší úroveň. Kontaktujte nás ještě dnes a získejte nabídku.',
  keywords: [
    'TD Productions',
    'webové stránky Ostrava',
    'webové aplikace Ostrava',
    'web design Ostrava',
    'digitální marketing Ostrava',
    'weby Ostrava',
    'marketingová agentura Ostrava',
    'web na míru Ostrava',
    'tvorba webových stránek ostrava',
    'tvorba webu na míru ostrava',
  ],
  openGraph: {
    type: 'website',
    url: 'https://tdprod.cz/', 
    title: 'TD Productions | Posouváme hranice digitální inovace',
    description: 'Inovace se u nás snoubí s profesionalitou a jednohlasným zájmem posunout váš projekt na tu nejvyšší úroveň. Kontaktujte nás ještě dnes a získejte nabídku.',
    images: [
      {
        url: 'https://tdprod.cz/assets/imgs/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Úvodní fotka TD Productions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TD Productions | Posouváme hranice digitální inovace',
    description: 'Inovace se u nás snoubí s profesionalitou a jednohlasným zájmem posunout váš projekt na tu nejvyšší úroveň. Kontaktujte nás ještě dnes a získejte nabídku.',
    images: ['https://tdprod.cz/assets/imgs/og-image.jpg']
  },
  alternates: {
    canonical: 'https://tdprod.cz/'
  }
}

export default async function Home() {
  const posts = await getAllPosts()
  const members = getMemberList()
  const services = getLightServices()

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
            <Header />
            <Marq />
            <About />
            <Services services={services} />
            <Portfolio />
            <Feat />
            <Team members={members} />
            {/* <Testimonials />
            <Clients /> */} 
            <Blog posts={posts} />
            <Marq2 />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}