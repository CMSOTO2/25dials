/* eslint-disable @next/next/no-img-element */
import { navLinks } from '@/util/constants';
import { handleEnterKeyDown } from '@/util/utiltyFunctions';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiMenuAltLeft, BiShoppingBag } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import MenuSlideIn from './MenuSlideIn';
import ShoppingCartSlideIn from './ShoppingCartSlideIn';

const Header = ({
  setShowSearchModal,
  setIsMenuOpen,
  isMenuOpen,
  isShoppingCartOpen,
  setIsShoppingCartOpen,
}: any) => {
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };
  const handleShoppingCartMenuOpen = () => {
    setIsShoppingCartOpen(true);
  };
  const handleShoppingCartMenuClose = () => {
    setIsShoppingCartOpen(false);
  };
  const handleSearchOpen = () => {
    setShowSearchModal(true);
  };

  useEffect(() => {
    if (isMenuOpen || isShoppingCartOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen, isShoppingCartOpen]);

  return (
    <header className='sticky left-0 top-0 z-40 border-b bg-white px-[18px] py-4'>
      <div className='flex items-center justify-between '>
        <div
          className='cursor-pointer lg:hidden'
          onClick={handleMenuOpen}
          tabIndex={0}
          title='Navigation Menu Icon, press Enter to open menu for links'
          onKeyDown={(e) => handleEnterKeyDown(e, handleMenuOpen)}
        >
          <BiMenuAltLeft size={36} color='#666565' />
        </div>

        <Link
          href=''
          className='hidden items-center gap-2 text-dials-lightgray lg:inline-flex'
          onClick={handleSearchOpen}
        >
          <AiOutlineSearch />
          Search
        </Link>
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
          size={30}
          className='cursor-pointer lg:hidden'
          color='#666565'
          onClick={handleShoppingCartMenuOpen}
          tabIndex={0}
        />

        <div className='hidden gap-4 uppercase text-dials-gray lg:flex'>
          <Link href='' onClick={handleShoppingCartMenuOpen}>
            Cart (0)
          </Link>
        </div>
      </div>

      <nav className='hidden lg:mt-4 lg:flex lg:justify-center lg:gap-8'>
        {navLinks.map(({ title, href }, index) => (
          <Link
            href={href}
            key={index}
            className='cursor-pointer text-[1rem] font-normal uppercase tracking-dials-spacing text-dials-gray'
          >
            {title}
          </Link>
        ))}
      </nav>

      {/* open mobile menu */}
      {/* will need to do same for shopping cart*/}
      {isMenuOpen && (
        <MenuSlideIn
          setShowSearchModal={setShowSearchModal}
          handleMenuClose={handleMenuClose}
        />
      )}
      {isShoppingCartOpen && (
        <ShoppingCartSlideIn
          handleShoppingCartMenuClose={handleShoppingCartMenuClose}
        />
      )}
    </header>
  );
};

export default Header;
