import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const MenuSlideIn = ({ handleMenuClose }: { handleMenuClose: () => void }) => {
  return (
    <section>
      <div
        className='fixed bottom-0 left-0 right-0 top-0 z-40 h-screen w-full bg-black opacity-75'
        onClick={handleMenuClose}
      />
      <div className='fixed bottom-0 left-0 top-0 z-50 flex h-screen w-[90%] flex-col bg-white px-6 pt-6 ease-in'>
        <div
          className='cursor-pointer'
          aria-label='Click to close menu'
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleMenuClose();
            }
          }}
        >
          <GrClose size={20} onClick={handleMenuClose} />
        </div>

        <div className='relative'></div>
        <nav className='mt-5 flex flex-col'>
          <Link
            href='/'
            className='cursor-pointer border-b py-5 text-[1rem] uppercase tracking-dials-spacing text-dials-gray'
          >
            Home
          </Link>
          <Link
            href=''
            className='cursor-pointer border-b py-5 text-[1rem] uppercase tracking-dials-spacing text-dials-gray'
          >
            Soft goods
          </Link>
          <Link
            href=''
            className='cursor-pointer border-b py-5 text-[1rem] uppercase tracking-dials-spacing text-dials-gray'
          >
            Sell your watch
          </Link>
          <Link
            href=''
            className='cursor-pointer border-b py-5 text-[1rem] uppercase tracking-dials-spacing text-dials-gray'
          >
            Sold watches
          </Link>
          <Link
            href=''
            className='cursor-pointer border-b py-5 text-[1rem] uppercase tracking-dials-spacing text-dials-gray'
          >
            Contact us
          </Link>
          <Link
            href=''
            className='cursor-pointer border-b py-5 text-[1rem] uppercase tracking-dials-spacing text-dials-gray'
          >
            Schedule Showing
          </Link>
        </nav>
        <div className='mt-auto flex items-center justify-between border-t py-2 '>
          <Link
            href={'https://www.facebook.com/25Dials'}
            target='_blank'
            aria-label='Link to 25 dials facebook page'
          >
            <FaFacebookF size={25} color={'#5c5c5c'} />
          </Link>
          <Link
            href={'https://www.instagram.com/25dials/'}
            target='_blank'
            aria-label='Link to 25 dials instagram page'
          >
            <AiOutlineInstagram size={30} color={'#5c5c5c'} />
          </Link>
          <Link
            href={'https://www.youtube.com/channel/UCdhDaXP0EapiBowzRyeoI9Q'}
            target='_blank'
            aria-label='Link to 25 dials youtube channel'
          >
            <AiFillYoutube size={30} color={'#5c5c5c'} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuSlideIn;
