import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Nav = () => {
    const pathname = usePathname();

  return (
    <>
      {Links.map((link, index) => {
        return (
          <Link
            href={link.path}
            className={`${ link.path === pathname && "text-blue-500  border-b-2 border-blue-500 "} first-letter:flex justify-center  hover:text-blue-500 font-medium transition-all  drop-shadow-md`}
            key={index}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
};

export default Nav;
