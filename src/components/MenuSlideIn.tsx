import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { navLinks, socialLinks } from '@/util/constants';
import { handleEnterKeyDown } from '@/util/utiltyFunctions';

const MenuSlideIn = ({
  handleMenuClose,
  setShowSearchModal,
}: {
  handleMenuClose: () => void;
  setShowSearchModal: () => void;
}) => {
  return (
    <section>
      <div
        className='fixed bottom-0 left-0 right-0 top-0 z-40 h-screen w-full bg-black opacity-40'
        onClick={handleMenuClose}
      />
      <div className='fixed bottom-0 left-0 top-0 z-50 flex h-screen w-[90%] flex-col bg-white px-6 pt-6 ease-in md:w-[60%]'>
        <div
          className='cursor-pointer'
          aria-label='Click to close menu'
          tabIndex={0}
          onKeyDown={(e) => handleEnterKeyDown(e, handleMenuClose)}
        >
          <GrClose size={18} onClick={handleMenuClose} color={'#5c5c5c80'} />
        </div>

        <div className='relative'></div>
        <nav className='mt-5 flex flex-col'>
          {navLinks.map(({ title, href }, index) => (
            <Link
              href={href}
              key={index}
              onClick={() => handleMenuClose()}
              className='cursor-pointer border-b py-5 text-[1rem] font-normal uppercase tracking-dials-spacing text-dials-gray'
            >
              {title}
            </Link>
          ))}
        </nav>
        <div className='mt-5 tracking-wide text-dials-lightgray hover:text-dials-gray'>
          <Link href='' onClick={() => setShowSearchModal(true)}>
            Search
          </Link>
        </div>
        <div className='mt-auto flex items-center justify-between border-t py-2 '>
          {socialLinks.map(({ icon, href, ariaLabel }, index) => (
            <Link
              key={index}
              href={href}
              target='_blank'
              aria-label={ariaLabel}
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSlideIn;
