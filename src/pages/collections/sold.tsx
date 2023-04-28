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

export default function SoldPage({ data }: { data: SwellDataType }) {
  return (
    <CommonPageTemplate isCatalog pageTitle='Sold'>
      {data?.results
        .filter((product: ProductsType) => product.stock_level === 0)
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
