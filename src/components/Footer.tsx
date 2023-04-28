import React from 'react';
import SocialLogos from './SocialLogos';
import CardLogos from './CardLogos';
import Link from 'next/link';
import { footerNavLinks } from '@/util/constants';
import { FooterNavLinksType } from '@/util/types';

const Footer = () => {
  return (
    <footer className='flex flex-col bg-dials-blue px-6 py-6 text-dials-gold md:pb-11 md:pt-20'>
      <div className='grid-cols-2 md:grid xl:grid-cols-3 2xl:grid-cols-4'>
        <div className='mb-12 md:px-10'>
          <h2 className='mb-4'>25 DIALS</h2>
          <ul className='flex flex-col gap-3 font-extralight tracking-tight'>
            {footerNavLinks.map((item: FooterNavLinksType, idx: number) => {
              return (
                <li key={idx}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className='mb-12 md:px-10'>
          <h2 className='mb-4'>OUR SERVICES</h2>
          <p className='mb-3 font-extralight leading-relaxed tracking-normal'>
            We love our customers, so we provide them with high-quality products
            from top brands. We are always looking to buy and trade watches, and
            we offer easy and convenient shipping and warranty on all watches
            worldwide.
          </p>
          <SocialLogos />
        </div>

        <div className='md:px-10'>
          <h2 className='mb-4'>BE THE FIRST TO KNOW!</h2>
          <p className='mb-4 font-extralight leading-relaxed tracking-normal'>
            Subscribe to receive updates on new arrivals, access to exclusive
            discounts, and more!
          </p>
          <div
            className='flex
          flex-col'
          >
            <input
              className='mb-8 border border-dials-gold bg-dials-blue px-[14px] py-3'
              type='text'
            />
            <button className='ml-8 text-start'>SUBSCRIBE</button>
          </div>
        </div>
        <div className='md:px-10 lg:mt-16'>
          <h2 className='mb-6'>ADDRESS</h2>
          <p className='mb-4 font-extralight leading-relaxed'>
            875 N High St Suite 300, Columbus, OH 43215
          </p>
          <SocialLogos />
        </div>
      </div>
      <div className='flex flex-col md:mt-20 md:flex-row md:items-center md:justify-between md:px-10 lg:items-end'>
        <div>
          <p className='mb-16 mt-16 flex flex-col text-center font-extralight lg:text-left'>
            <span className='leading-relaxed'>© 25 DIALS</span>
            <span className='leading-relaxed'>25 DIALS LLC | 2021</span>
          </p>
        </div>
        <hr className='text-dials-gray' />
        <CardLogos />
      </div>
    </footer>
  );
};

export default Footer;
