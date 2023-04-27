import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { navLinks, socialLinks } from "@/util/constants";

const MenuSlideIn = ({ handleMenuClose }: { handleMenuClose: () => void }) => {
  return (
    <section>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 z-40 h-screen w-full bg-black opacity-75"
        onClick={handleMenuClose}
      />
      <div className="fixed bottom-0 left-0 top-0 z-50 flex h-screen w-[90%] flex-col bg-white px-6 pt-6 ease-in">
        <div
          className="cursor-pointer"
          aria-label="Click to close menu"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleMenuClose();
            }
          }}
        >
          <GrClose size={20} onClick={handleMenuClose} />
        </div>

        <div className="relative"></div>
        <nav className="mt-5 flex flex-col">
          {navLinks.map(({ title, href }, index) => (
            <Link
              href={href}
              key={index}
              onClick={() => handleMenuClose()}
              className="cursor-pointer border-b py-5 text-[1rem] uppercase tracking-dials-spacing text-dials-gray"
            >
              {title}
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex items-center justify-between border-t py-2 ">
          {socialLinks.map(({ icon, href, ariaLabel }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              aria-label={ariaLabel}
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSlideIn;
