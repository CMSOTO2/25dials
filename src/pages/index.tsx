import swell from '../swell/swell';
import ProductItem from '@/components/ProductItem';
import CommonPageTemplate from '@/components/Templates/CommonPageTemplate';
import { swellCategories } from '@/util/constants';
import { ProductsType, SwellDataType } from '@/util/types';

export async function getStaticProps() {
  const swellProductsWatches = await swell.products.list({
    category: swellCategories.watches,
  });

  return {
    props: {
      swellProductsWatches,
    },
  };
}

export default function Home({
  swellProductsWatches,
}: {
  swellProductsWatches: SwellDataType;
}) {
  return (
    <CommonPageTemplate pageTitle='Shop' isCatalog>
      {swellProductsWatches.results.map(
        (product: ProductsType, index: number) => {
          const isSoldOut = product.stock_level === 0;

          return (
            <ProductItem
              key={index}
              href={product.slug}
              src={product.images[0]?.file.url}
              price={product.price}
              title={product.name}
              isSoldOut={isSoldOut}
            />
          );
        }
      )}
    </CommonPageTemplate>
  );
}
