import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
function SocialLogos() {
  return (
    <div className='flex gap-8'>
      <a
        aria-label='Link to 25 dials facebook page'
        href='https://www.facebook.com/25Dials'
        target={'_blank'}
      >
        <FaFacebookF size={16} />
      </a>
      <a
        aria-label='Link to 25 dials instagram page'
        href='https://www.instagram.com/25dials/'
        target={'_blank'}
      >
        <AiOutlineInstagram size={20} />
      </a>
      <a
        aria-label='Link to 25 dials Youtube channel'
        href='https://www.youtube.com/channel/UCdhDaXP0EapiBowzRyeoI9Q'
        target={'_blank'}
      >
        <FaYoutube size={20} />
      </a>
    </div>
  );
}

export default SocialLogos;
