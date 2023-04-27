import React from 'react';
import SocialLogos from './SocialLogos';
import CardLogos from './CardLogos';

const Footer = () => {
  return (
    <>
      <footer className='flex flex-col bg-dials-blue px-6 py-6 text-dials-gold md:pb-11 md:pt-20'>
        <div className='grid-cols-2 md:grid lg:grid-cols-3 2xl:grid-cols-4'>
          <div className='mb-12 md:px-10'>
            <h2 className='mb-4'>25 DIALS</h2>
            <ul className='flex flex-col gap-2'>
              <li>Search</li>
              <li>Soft Goods</li>
              <li>Policies</li>
              <li>Privacy Policy</li>
              <li>Cryptocurrency</li>
              <li>Terms of Service</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Refund policy</li>
            </ul>
          </div>

          <div className='mb-12 md:px-10'>
            <h2 className='mb-4'>OUR SERVICES</h2>
            <p className='mb-3 leading-relaxed'>
              We love our customers, so we provide them with high-quality
              products from top brands. We are always looking to buy and trade
              watches, and we offer easy and convenient shipping and warranty on
              all watches worldwide.
            </p>
            <SocialLogos />
          </div>

          <div className='px-10 lg:ml-10'>
            <h2 className='mb-4'>BE THE FIRST TO KNOW!</h2>
            <p className='mb-4 leading-relaxed'>
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
          <div className='mt-16 md:px-10'>
            <h2 className='mb-6'>ADDRESS</h2>
            <p className='mb-4 leading-relaxed'>
              875 N High St Suite 300, Columbus, OH 43215
            </p>
            <SocialLogos />
          </div>
        </div>
        <div className='flex md:mt-20 md:justify-between md:px-10'>
          <div>
            <p className='mb-16 mt-16 flex flex-col text-center'>
              <span className='leading-relaxed'> © 25 DIALS</span>
              <span className='leading-relaxed'>25 DIALS LLC | 2021</span>
            </p>
          </div>
          <CardLogos />
        </div>
      </footer>
    </>
  );
};

export default Footer;
