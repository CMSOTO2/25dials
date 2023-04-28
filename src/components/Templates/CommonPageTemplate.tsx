import { CommonPageTemplate } from '@/util/types';

export default function CommonPageTemplate({
  pageTitle,
  pageDescription,
  isCatalog,
  children,
}: CommonPageTemplate) {
  return (
    <div className='mx-auto mb-10 max-w-[1400px]'>
      <div className='flex flex-col items-center pb-9 pt-6 text-center'>
        <h1 className=' mb-2 text-[1.75rem] font-normal uppercase'>
          {pageTitle}
        </h1>
        <p className='w-[90%] font-light tracking-normal'>{pageDescription}</p>
      </div>
      <main
        className={`
        ${
          isCatalog
            ? 'grid auto-rows-auto grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 '
            : ''
        }`}
      >
        {children}
      </main>
    </div>
  );
}
