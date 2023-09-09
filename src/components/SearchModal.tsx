/* eslint-disable @next/next/no-img-element */
import React, { ChangeEvent, useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import swell from '../swell/swell';
import { ProductsType, SwellDataType } from '@/util/types';
import { DefaultNoImageAvailable } from '@/util/constants';
import Link from 'next/link';

export default function SearchModal({
  setShowSearchModal,
  showSearchModal,
  setIsMenuOpen,
}: {
  setShowSearchModal: (boolean: boolean) => void;
  showSearchModal: boolean;
  setIsMenuOpen: (boolean: boolean) => void;
}) {
  const [query, setQuery] = useState<string>('');
  const [productResults, setProductResults] = useState<{
    loading: boolean;
    error: boolean;
    results: ProductsType[];
  }>({ loading: false, error: false, results: [] });

  const onChangeSearch = (e: any) => {
    setQuery(e.target.value);
    setProductResults({ loading: true, error: false, results: [] });
    swell.products
      .list({ search: e.target.value })
      .then((products: any) => {
        setProductResults({
          error: false,
          loading: false,
          results: products.results,
        });
      })
      .catch((error) => {
        setProductResults((prev) => ({ ...prev, loading: false, error: true }));
        console.log(error);
      });
  };
  const handleSearchClose = () => {
    setShowSearchModal(false);
    setIsMenuOpen(false);
  };

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const showModalParam = urlParams.get('showModal');
  // }, []);

  const SearchProduct = ({ src, name, price, href }: any) =>
    src ? (
      <Link
        onClick={handleSearchClose}
        href={{
          pathname: '/products/[slug]',
          query: { slug: href },
        }}
        className='flex sm:flex-col '
      >
        <img
          className={`block aspect-auto h-auto max-w-[100px] object-contain sm:h-[375px] sm:w-auto sm:max-w-none `}
          alt='alt'
          src={src ?? DefaultNoImageAvailable}
          loading='lazy'
        />
        <div className='inline-block p-4 sm:w-[300px] sm:text-center'>
          <span className='mb-2 block'>{name}</span>
          <span className='block text-dials-blue'>${price}</span>
        </div>
      </Link>
    ) : null;

  return (
    <div
      className={`${
        showSearchModal ? 'fixed' : 'hidden'
      } left-0 top-0 z-50 h-full w-full overflow-hidden bg-white px-6 py-8 sm:px-10`}
    >
      <div
        className='sticky top-0 mb-[3rem]
      flex items-center justify-between'
      >
        <input
          placeholder='Search...'
          className='mr-2 w-full text-[18px] uppercase tracking-dials-spacing placeholder-dials-black focus:outline-none sm:text-[20px]'
          value={query}
          onChange={onChangeSearch}
        />
        <div className='w-[20px] cursor-pointer sm:w-[22px]'>
          <GrClose onClick={() => handleSearchClose()} size={'100%'} />
        </div>
      </div>

      {query !== '' && (
        <div>
          <span
            className='
          text-[12px] uppercase text-dials-blue outline-1'
          >
            Products
          </span>
          <div className='mb-[24px] mt-[18px] block h-[1px] w-full bg-[#dadada]' />
        </div>
      )}
      <div className='flex h-full flex-col gap-y-6 overflow-auto sm:flex-row sm:gap-5'>
        {productResults.results.length && query !== '' ? (
          productResults.results?.map((product, index) => (
            <SearchProduct
              key={index}
              name={product.name}
              price={product.price}
              src={product.images[0]?.file.url}
              href={product.slug}
            />
          ))
        ) : (
          <></>
        )}
        {productResults.loading && query !== '' && <p>loading</p>}

        {productResults.error && query !== '' && <p>error</p>}
        {query !== '' &&
          !productResults.results.length &&
          !productResults.loading &&
          !productResults.error && (
            <span className='text-[16px] tracking-normal'>
              No results could be found
            </span>
          )}
      </div>
    </div>
  );
}
