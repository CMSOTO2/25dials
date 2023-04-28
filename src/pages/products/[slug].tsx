import swell from '../../swell/swell';
import { useRouter } from 'next/router';
import { ProductsType } from '@/util/types';

export async function getStaticProps({ params }: { params: any }) {
  const swellProduct = await swell.products.get(params.slug);

  return {
    props: {
      product: swellProduct,
    },
  };
}

export async function getStaticPaths() {
  const swellProducts = await swell.products.list();
  let fullPaths = [];
  for (let product of swellProducts.results) {
    fullPaths.push({ params: { slug: product.slug } });
  }

  return {
    paths: fullPaths,
    fallback: false,
  };
}

function Product({ product }: { product: ProductsType }) {
  return (
    <section className='-mx-4'>
      <img
        src={product?.images?.[0]?.file?.url}
        alt={product?.name}
        loading='lazy'
        width={500}
      />
      <div className='px-6'>
        <div className='my-4 text-center text-dials-black'>
          <h2 className='mb-4 font-normal uppercase'>25 dials</h2>
          <h1 className='text-3xl font-normal '>{product?.name}</h1>
          <div className='mt-3 text-xl font-normal text-dials-blue'>
            <span>${product?.price}</span>
          </div>
        </div>
        <hr />

        <div
          dangerouslySetInnerHTML={{ __html: product?.description }}
          className='mt-4'
        />

        {/* will take us to product inquiry forum */}
        <button className='my-4 w-full bg-dials-blue py-2 uppercase tracking-dials-spacing text-white'>
          Inquire
        </button>
      </div>
    </section>
  );
}

export default Product;
