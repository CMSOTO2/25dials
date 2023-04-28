import swell from '../swell/swell';
import ProductItem from '@/components/ProductItem';
import ShopPageTemplate from '@/components/Templates/CommonPageTemplate';
import { ProductsType, SwellDataType } from '@/util/types';

export async function getStaticProps() {
  const swellProducts = await swell.products.list();

  return {
    props: {
      data: swellProducts,
    },
  };
}

export default function Home({ data }: { data: SwellDataType }) {
  return (
    <ShopPageTemplate pageTitle='Shop' isCatalog>
      {data?.results.map((product: ProductsType, index: number) => {
        return (
          <ProductItem
            key={index}
            href={`/products/${product.slug}`}
            src={product.images[index].file.url}
            price={product.price}
            title={product.name}
          />
        );
      })}
    </ShopPageTemplate>
  );
}
