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
    <div>
      <div>{product?.name}</div>
      <div dangerouslySetInnerHTML={{ __html: product?.description }}></div>
      <img
        src={product?.images?.[0]?.file?.url}
        alt={product?.name}
        loading='lazy'
      />
      <div>${product?.price}</div>
      <button>Inquiry</button>
      {/* will take us to product inquiry forum */}
    </div>
  );
}

export default Product;
