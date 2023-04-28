import ProductItem from '@/components/ProductItem';
import CommonPageTemplate from '@/components/Templates/CommonPageTemplate';
import { ProductsType, SwellDataType } from '@/util/types';
import swell from '../../swell/swell';

export async function getStaticProps() {
  const swellProducts = await swell.products.list();

  return {
    props: {
      data: swellProducts,
    },
  };
}

export default function SoftGoodsPage({ data }: { data: SwellDataType }) {
  return (
    <CommonPageTemplate
      pageTitle='Soft Goods'
      pageDescription='Timeless products for those who enjoy great history, design, and quality'
      isCatalog
    >
      {data?.results
        .filter((product: ProductsType) => product.tags.includes('Soft Good'))
        .map((product: ProductsType, index: number) => {
          const isSoldOut = product.stock_level === 0;

          return (
            <ProductItem
              key={index}
              href={`/products/${product.slug}`}
              src={product.images[0].file.url}
              price={product.price}
              title={product.name}
              isSoldOut={isSoldOut}
            />
          );
        })}
    </CommonPageTemplate>
  );
}
