import Image from 'next/image';
import { Jost } from 'next/font/google';
import Header from '@/components/Header';
import Banner from '@/components/Banner';

const jost = Jost({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${jost.className}`}>
      <Banner />
      <Header />
      <main className='flex min-h-screen flex-col items-center justify-between p-24'></main>
    </div>
  );
}
