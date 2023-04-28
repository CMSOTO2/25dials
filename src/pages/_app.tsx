import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Jost } from 'next/font/google';

const jost = Jost({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${jost.style} font-light tracking-dials-spacing`}>
      <Banner />
      <Header />
      <div className='px-4 lg:px-6'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
