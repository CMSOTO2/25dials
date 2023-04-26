import Image from "next/image";
import { Jost } from "next/font/google";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ProductItem from "@/components/ProductItem";

const jost = Jost({ subsets: ["latin"] });

const itemsData = [{}, {}, {}];

export default function Home() {
  return (
    <div className={`${jost.className} font-light tracking-dials-spacing`}>
      <Banner />
      <Header />
      <h1 className="font py-8 text-center text-[1.9rem] uppercase">Shop</h1>
      <main className="grid min-h-screen auto-rows-auto grid-cols-2 gap-x-2.5 gap-y-8 px-4 lg:grid-cols-4 lg:gap-x-6 lg:px-6">
        {itemsData.map((data, index) => (
          <ProductItem
            key={index}
            href="/"
            src="https://cdn.shopify.com/s/files/1/0530/2802/8612/products/DSCF1704_44a0b6ba-c46f-4d0b-9685-3e848bb84ff4_800x.jpg?v=1682356179"
            price={1000}
            title={"ROLEX DATEJUST 16013 CHAMPAGNE DIAMOND DIAL - 1984"}
          />
        ))}
        <ProductItem
          href="/"
          src="https://cdn.shopify.com/s/files/1/0530/2802/8612/products/DSCF1704_44a0b6ba-c46f-4d0b-9685-3e848bb84ff4_800x.jpg?v=1682356179"
          price={1000}
          title={
            "ROLEX DATEJUST 16013 CHAMPAGNE DIAMOND DIAL - 1984 qiwjidqihhai longer name"
          }
          soldOut
        />
        <ProductItem
          href="/"
          src="https://cdn.shopify.com/s/files/1/0530/2802/8612/products/DSCF1704_44a0b6ba-c46f-4d0b-9685-3e848bb84ff4_800x.jpg?v=1682356179"
          price={1000}
          title={"ROLEX DATEJUST 16013 CHAMPAGNE DIAMOND DIAL - 1984"}
        />
      </main>
    </div>
  );
}
