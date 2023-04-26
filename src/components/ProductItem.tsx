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
    <span className="py-.5 absolute left-2 top-2 bg-white px-2 text-sm uppercase">
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

      <div className="mt-4 flex flex-col items-center justify-center px-2 text-sm">
        <p>{title}</p>
        <p className="inline-block text-dials-blue">${price}</p>
      </div>
    </Link>
  );
}
