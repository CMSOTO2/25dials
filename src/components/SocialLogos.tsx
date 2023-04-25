import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
function SocialLogos() {
  return (
    <div className='flex gap-8'>
      <FaFacebookF />
      <AiOutlineInstagram />
      <FaYoutube />
    </div>
  );
}

export default SocialLogos;
