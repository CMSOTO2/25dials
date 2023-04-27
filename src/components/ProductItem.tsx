/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

type productItemType = {
  href: string;
  src: string;
  price: number;
  title: string;
  soldOut?: boolean;
};

export default function ProductItem({
  href,
  src,
  price,
  title,
  soldOut,
}: productItemType) {
  const soldOutTag = (
    <span className="absolute left-2 top-2 bg-white px-2 py-0.5 text-sm uppercase">
      Sold out
    </span>
  );

  return (
    <Link
      href={href}
      aria-label={`image, ${title}, Price: $${price}, ${
        soldOut ? "Sold out" : ""
      }`}
      className="relative h-full w-full text-center font-light uppercase"
    >
      {soldOut && soldOutTag}
      <img className="h-auto w-full" src={src} alt={`${title},`} />

      <div className="mt-4 flex flex-col items-center justify-center gap-2 px-[.75px] text-[12px]">
        <p>{title}</p>
        <p className="inline-block text-dials-blue">${price}</p>
      </div>
    </Link>
  );
}
