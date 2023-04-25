/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiMenuAltLeft, BiShoppingBag } from 'react-icons/bi';
import MenuSlideIn from './MenuSlideIn';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState<boolean>(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  return (
    <header className='sticky left-0 top-0 border-b bg-white'>
      <div className='flex items-center justify-between px-[18px] py-4'>
        <BiMenuAltLeft
          size={36}
          className='hover:cursor-pointer'
          color='#666565'
          onClick={handleMenuOpen}
        />
        <Link href='/'>
          <img
            src={
              'https://cdn.shopify.com/s/files/1/0530/2802/8612/files/final-25dials-favicon_75x.png?v=1613579839'
            }
            // change to nextjs image tag and change src to svg file david sends
            alt='25 dials company logo'
          />
        </Link>

        <BiShoppingBag
          size={36}
          className='hover:cursor-pointer'
          color='#666565'
          onClick={() => setIsShoppingCartOpen(true)}
        />
      </div>

      {/* open mobile menu */}
      {/* will need to do same for shopping cart*/}
      {isMenuOpen && <MenuSlideIn handleMenuClose={handleMenuClose} />}
    </header>
  );
};

export default Header;
