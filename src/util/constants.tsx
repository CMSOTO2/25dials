import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { navlinkType } from "./types";
import { FaFacebookF } from "react-icons/fa";

export const navLinks = [
  { title: "Home", href: "/" },
  { title: "Soft Goods", href: "/collections/soft-goods" },
  { title: "Sell your watch", href: "/sell" },
  { title: "Sold watches", href: "/collections/sold" },
  { title: "Contact us", href: "/contact" },
] as navlinkType[];

export const socialLinks = [
  {
    icon: <FaFacebookF size={25} color={"#5c5c5c"} />,
    href: "https://www.facebook.com/25Dials",
    ariaLabel: "Link to 25 dials facebook page",
  },
  {
    icon: <AiOutlineInstagram size={30} color={"#5c5c5c"} />,
    href: "https://www.instagram.com/25dials/",
    ariaLabel: "Link to 25 dials facebook page",
  },
  {
    icon: <AiFillYoutube size={30} color={"#5c5c5c"} />,
    href: "https://www.youtube.com/channel/UCdhDaXP0EapiBowzRyeoI9Q",
    ariaLabel: "Link to 25 dials facebook page",
  },
];
