import swell from '../../swell/swell';
import { useRouter } from 'next/router';
import { ProductsType, SwellImagesType } from '@/util/types';
import DOMPurify from 'isomorphic-dompurify';

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
  const sanitizedHTML = DOMPurify.sanitize(product?.description);

  return (
    <div className='flex justify-center'>
      <section className='-mx-4 lg:mx-auto lg:flex'>
        <div className='lg:w-[50%]'>
          {/* add carousel here */}
          <div className='sticky top-0'>
            {product?.images.map((image: SwellImagesType, idx: number) => {
              return (
                <img
                  key={idx}
                  src={image?.file?.url}
                  alt={product?.name}
                  loading='lazy'
                  className='mb-4'
                />
              );
            })}
          </div>
        </div>

        <div className='px-6 lg:sticky lg:top-auto lg:ml-[50px] lg:mr-[100px] lg:w-[40%]'>
          <div className='my-4 text-center text-dials-black lg:w-[375px] lg:text-left'>
            <h2 className='mb-4 font-normal uppercase'>25 dials</h2>
            <h1 className='text-3xl font-normal '>{product?.name}</h1>
            <div className='mt-3 text-xl font-normal text-dials-blue'>
              <span>${product?.price}</span>
            </div>
          </div>
          <hr />
          <div
            dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
            className='mt-4'
          />

          {/* will take us to product inquiry forum */}
          <button className='my-4 w-full bg-dials-blue py-2 uppercase tracking-dials-spacing text-white'>
            Inquire
          </button>
        </div>
      </section>
    </div>
  );
}

export default Product;
