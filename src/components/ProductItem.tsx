/* eslint-disable @next/next/no-img-element */
import { productItemType } from '@/util/types';
import Link from 'next/link';
import React, { useState } from 'react';

export default function ProductItem({
  href,
  src,
  price,
  title,
  isSoldOut,
}: productItemType) {
  const [isLoading, setLoading] = useState(true);

  const soldOutTag = (
    <span className='absolute left-2 top-2 bg-white px-2 py-0.5 text-sm uppercase'>
      Sold out
    </span>
  );
  console.log(href);
  return (
    <Link
      href={{
        pathname: '/products/[slug]',
        query: { slug: href },
      }}
      aria-label={`image, ${title}, Price: $${price}, ${
        isSoldOut ? 'Sold out' : ''
      }`}
      className='relative h-full w-full text-center font-light uppercase'
    >
      {isSoldOut && soldOutTag}
      <img
        className='h-auto w-full'
        src={src}
        alt={`${title}`}
        height={315}
        width={225}
        loading='lazy'
      />

      <div className='mt-4 flex flex-col items-center justify-center gap-2 px-[.75px] text-[12px]'>
        <h2 className='font-normal text-dials-black'>{title}</h2>
        <span className='inline-block text-dials-blue'>${price}</span>
      </div>
    </Link>
  );
}
