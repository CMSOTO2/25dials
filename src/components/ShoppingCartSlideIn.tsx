import { handleEnterKeyDown } from '@/util/utiltyFunctions';
import React from 'react';
import { GrClose } from 'react-icons/gr';

const ShoppingCartSlideIn = ({
  handleShoppingCartMenuClose,
}: {
  handleShoppingCartMenuClose: () => void;
}) => {
  return (
    <section className='relative'>
      <div
        className='fixed bottom-0 left-0 right-0 top-0 z-40 h-screen w-full bg-black opacity-40'
        onClick={handleShoppingCartMenuClose}
      />
      <div className='fixed bottom-0 right-0 top-0 z-50 flex h-screen w-[80%] flex-col bg-white  ease-in md:w-[480px]'>
        <div
          className='flex w-full  items-center justify-between px-6 py-4'
          aria-label='Click to close menu'
        >
          <h4 className='text-lg font-normal text-dials-gray'>CART</h4>
          <GrClose
            tabIndex={0}
            onKeyDown={(e) =>
              handleEnterKeyDown(e, handleShoppingCartMenuClose)
            }
            size={18}
            onClick={handleShoppingCartMenuClose}
            color={'#5c5c5c80'}
            className='cursor-pointer'
          />
        </div>
        <hr className='left-0 right-0' />

        <div className='flex h-full items-center justify-center'>
          {/* logic for if cart is empty */}
          <p className='text-center text-lg font-normal uppercase text-black'>
            Your cart is empty
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCartSlideIn;
