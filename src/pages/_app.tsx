import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SearchModal from '@/components/SearchModal';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Jost } from 'next/font/google';
import { useEffect, useState } from 'react';

const jost = Jost({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState<boolean>(false);

  // Todo, possibly set search to url so there is back history??
  useEffect(() => {
    window.location && console.log(window.location.href);
  }, []);

  return (
    <div className={`${jost.style} font-light tracking-dials-spacing`}>
      <SearchModal
        setShowSearchModal={setShowSearchModal}
        showSearchModal={showSearchModal}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Banner />
      <Header
        setShowSearchModal={setShowSearchModal}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        isShoppingCartOpen={isShoppingCartOpen}
        setIsShoppingCartOpen={setIsShoppingCartOpen}
      />
      <div className='px-4 lg:px-6'>
        <Component {...pageProps} />
      </div>
      <Footer setShowSearchModal={setShowSearchModal} />
    </div>
  );
}
