import React, { Children } from "react";
import Banner from "../Banner";
import Header from "../Header";
import ProductItem from "../ProductItem";

export type ShoppingPageType = {
  pageTitle: string;
  pageDescription?: string;
  isCatalog?: boolean;
  children?: any;
};

export default function CommonPageTemplate({
  pageTitle,
  pageDescription,
  isCatalog,
  children,
}: ShoppingPageType) {
  return (
    <div>
      <div className="mx-auto flex max-w-4xl flex-col items-center pb-9 pt-6 text-center">
        <h1 className=" mb-2 text-[1.75rem] uppercase">{pageTitle}</h1>
        <p className="w-[90%] font-light tracking-normal">{pageDescription}</p>
      </div>
      <main
        className={`
        ${
          isCatalog
            ? "grid auto-rows-auto grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 "
            : ""
        }
        min-h-screen`}
      >
        {children}
      </main>
    </div>
  );
}
