"use client";
import { MobileNav, Navbar, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
import Hamburger from "../../public/imagini/hamburger.svg";
import Logo from "../../public/imagini/logo.svg";

interface INavItem {
  label: string;
  href: string;
}
function NavItem({ label, href }: INavItem) {
  return (
    <Link href={href}>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="flex items-center gap-1.5 p-1 font-normal"
      >
        {label}
      </Typography>
    </Link>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem href="despre-noi" label="Despre noi" />
      <NavItem href="munca" label="Locuri de munca" />
      <NavItem href="contact" label="Contact" />
      <NavItem href="servicii" label="Servicii" />
      <NavItem href="blog" label="Blog" />
      <button className="hidden h-8  w-20 rounded-2xl bg-red-600 text-white lg:inline-block">
        Aplica
      </button>
    </ul>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const menuOpenIcon = <Hamburger className="h-8 w-8" />;

  const menuCloseIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      stroke="black"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  return (
    <Navbar
      fullWidth
      className="border-blue-gray-50 fixed z-50 w-full border-b bg-white p-2 lg:p-4"
    >
      <div className="container mx-auto flex w-full items-center justify-between text-black">
        <Typography
          as="a"
          href="/"
          variant="small"
          color="black"
          className="mr-4 cursor-pointer py-1.5 font-bold"
        >
          <Logo className="w-32" />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>

        <button className="lg:hidden" onClick={handleOpen}>
          {open ? menuCloseIcon : menuOpenIcon}
        </button>
      </div>
      <MobileNav open={open}>
        <NavList />
        <button className=" h-8  w-20 rounded-2xl bg-red-600 text-white ">
          Aplica
        </button>
      </MobileNav>
    </Navbar>
  );
}

export default Header;
