import React from 'react';
import SocialLogos from './SocialLogos';
import CardLogos from './CardLogos';

const Footer = () => {
  return (
    <>
      <footer className='flex flex-col bg-dials-blue px-4 py-8 text-dials-gold'>
        <div className=''>
          <div className='mb-12'>
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

          <div className='mb-12'>
            <h2 className='mb-4'>OUR SERVICES</h2>
            <p className='mb-3'>
              We love our customers, so we provide them with high-quality
              products from top brands. We are always looking to buy and trade
              watches, and we offer easy and convenient shipping and warranty on
              all watches worldwide.
            </p>
            <SocialLogos />
          </div>

          <div>
            <h2 className='mb-4'>BE THE FIRST TO KNOW!</h2>
            <p className='mb-4'>
              Subscribe to receive updates on new arrivals, access to exclusive
              discounts, and more!
            </p>
            <div
              className='flex
          flex-col'
            >
              <input className='mb-8' type='text' />
              <button className='ml-8 text-start'>SUBSCRIBE</button>
            </div>
          </div>
          <div className='mt-16'>
            <h2 className='mb-6'>ADDRESS</h2>
            <p className='mb-4'>875 N High St Suite 300, Columbus, OH 43215</p>
            <SocialLogos />
          </div>
        </div>
        <div>
          <p className='mb-16 mt-16 flex flex-col text-center'>
            <span> © 25 DIALS</span>
            <span>25 DIALS LLC | 2021</span>
          </p>
        </div>
      </footer>
      <CardLogos />
    </>
  );
};

export default Footer;
