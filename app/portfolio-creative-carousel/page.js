import Lines from '@/components/common/Lines';
import Portfolio from '@/components/p-creative-carousel/Portfolio';

export const metadata = {
  title: 'TD Productions'
};

export default function Home() {
  return (
    <>
      <Lines />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Portfolio />
          </main>
        </div>
      </div>
    </>
  );
}
