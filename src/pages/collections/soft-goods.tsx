import ProductItem from '@/components/ProductItem';
import CommonPageTemplate from '@/components/Templates/CommonPageTemplate';

const itemsData = [{}, {}, {}];

export default function SoftGoodsPage() {
  return (
    <CommonPageTemplate
      pageTitle='Soft Goods'
      pageDescription='Timeless products for those who enjoy great history, design, and quality'
      isCatalog
    >
      {itemsData.map((data, index) => (
        <ProductItem
          key={index}
          href='/'
          src='https://cdn.shopify.com/s/files/1/0530/2802/8612/products/DSCF1704_44a0b6ba-c46f-4d0b-9685-3e848bb84ff4_800x.jpg?v=1682356179'
          price={1000}
          title={'ROLEX DATEJUST 16013 CHAMPAGNE DIAMOND DIAL - 1984'}
        />
      ))}
    </CommonPageTemplate>
  );
}
