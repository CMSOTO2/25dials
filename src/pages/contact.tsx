import CommonPageTemplate from '@/components/Templates/CommonPageTemplate';
import { Lato } from 'next/font/google';
const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] });

export default function contact() {
  return (
    <CommonPageTemplate pageTitle='Contact us'>
      <div className={`text-center font-light tracking-normal text-[#080808]`}>
        <p>
          Want to ask us something or finalize a purchase? We encourage you to
          contact us via email, text, or phone!
        </p>
        <p>
          <strong className='font-bold'>Email: </strong>
          <a href='mailto:Sales@25dials.com'>Sales@25dials.com</a>
        </p>
        <p>
          <strong className='font-bold'>Phone: </strong>
          614-377-7216
        </p>
        <p>
          <strong className='font-bold'>Address: </strong>
          875 N High St Suite 300, Columbus, OH, 43215
        </p>
      </div>
    </CommonPageTemplate>
  );
}
