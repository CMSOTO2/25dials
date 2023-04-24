/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiMenuAltLeft, BiShoppingBag } from 'react-icons/bi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState<boolean>(false);

  return (
    <header className='bg-white border-b top-0 left-0 sticky'>
      <div className='flex justify-between py-4 px-[18px] items-center'>
        <BiMenuAltLeft
          size={36}
          className='hover:cursor-pointer'
          color='#666565'
          onClick={() => setIsMenuOpen(true)}
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
      {isMenuOpen ? (
        <div className='absolute top-0 left-0 bottom-0'>
          <div className='bg-black'></div>
          <div className='bg-white w-[90%]'>menu op</div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
