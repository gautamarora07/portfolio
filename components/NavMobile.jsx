"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const NavMobile = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#3b82f6"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* LOGO */}
        <div className="text-3xl my-24  text-center">
          <Link href="/" className=" text-blue-500">
            <h1 >
              # <span className="text-white">G T M</span>
            </h1>
          </Link>
        </div>

        {/* NAV */}
        <nav className="flex flex-col justify-center items-center gap-8">
        {Links.map((link, index) => {
        return (
          <Link
            href={link.path}
            className={`${ link.path === pathname && "text-blue-500  border-b-2 border-blue-500 "} first-letter:flex justify-center  hover:text-blue-500 font-medium transition-all `}
            key={index}
          >
            {link.name}
          </Link>
        );
      })}
      </nav>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
