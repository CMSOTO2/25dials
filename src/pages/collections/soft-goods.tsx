import ProductItem from '@/components/ProductItem';
import CommonPageTemplate from '@/components/Templates/CommonPageTemplate';
import { ProductsType, SwellDataType } from '@/util/types';
import swell from '../../swell/swell';
import { swellCategories } from '@/util/constants';

export async function getStaticProps() {
  const swellProductsSoftGoods = await swell.products.list({
    category: swellCategories.softGoods,
  });

  return {
    props: {
      swellProductsSoftGoods: swellProductsSoftGoods,
    },
  };
}

export default function SoftGoodsPage({
  swellProductsSoftGoods,
}: {
  swellProductsSoftGoods: SwellDataType;
}) {
  return (
    <CommonPageTemplate
      pageTitle='Soft Goods'
      pageDescription='Timeless products for those who enjoy great history, design, and quality'
      isCatalog
    >
      {swellProductsSoftGoods?.results.map(
        (product: ProductsType, index: number) => {
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
        }
      )}
    </CommonPageTemplate>
  );
}
