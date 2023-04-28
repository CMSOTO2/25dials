export type navlinkType = {
  title: string;
  href: string;
};

export type FooterNavLinksType = {
  title: string;
  href: string;
};

export type CommonPageTemplate = {
  pageTitle: string;
  pageDescription?: string;
  isCatalog?: boolean;
  children?: any;
};

export type productItemType = {
  href: string;
  src: string;
  price: number;
  title: string;
  soldOut?: boolean;
};

export type SwellDataType = {
  count: number;
  page: number;
  page_count: number;
  results: ProductsType[];
};

export type ProductsType = {
  attribues?: object;
  bundle?: any;
  currency: string;
  description: string;
  id: string;
  images: SwellImagesType[];
  meta_description: string | null;
  meta_title: string | null;
  name: string;
  options?: any;
  price: number;
  purchase_options: PurchaseOptionsType;
  sale: boolean;
  sku: null | any;
  slug: string;
  stock_level: number;
  stock_purchasable: boolean;
  stock_status: string;
  stock_tracking: boolean;
  tags: any;
};

export type PurchaseOptionsType = {
  price: number;
  sale: boolean;
  sale_price: null | any;
};

export type SwellImagesType = {
  id: string;
  file: SwellImagesFileType;
};

export type SwellImagesFileType = {
  height: number;
  md5: string;
  url: string;
  width: number;
};
