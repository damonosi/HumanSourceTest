"use client";
import {
  Button,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
import Hamburger from "../../public/imagini/hamburger.svg";
import Logo from "../../public/imagini/logo.svg";
import LanguageSwitcher from "./../components/LanguageSwitcher/LanguageSwitcher";

interface INavItem {
  label: string;
  href: string;
}
function NavItem({ label, href }: INavItem) {
  return (
    <Link href={href}>
      <Typography
        variant="small"
        className="flex  items-center gap-1.5 p-1 text-gri-brand"
      >
        {label}
      </Typography>
    </Link>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3  md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-8">
      <NavItem href="despre-noi" label="Despre noi" />
      <NavItem href="locuri-de-munca" label="Locuri de munca" />
      <NavItem href="contact" label="Contact" />
      <NavItem href="servicii" label="Servicii" />
      <NavItem href="bloguri" label="Blog" />
      <Button
        ripple={true}
        className="hidden  rounded-full bg-red-800 px-4 py-3 text-white md:inline-block"
      >
        Aplica
      </Button>
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
      className="fixed z-50 h-[60px] w-full  items-center  justify-center border-b border-alb-site bg-alb-site  py-0   md:px-[70px] "
    >
      <div className="container mx-auto flex h-[60px]  w-full items-center justify-between  px-4 text-gri-brand md:px-0">
        <div className="flex w-1/3 ">
          <Typography
            as="a"
            href="/"
            variant="small"
            color="black"
            className="mr-4 cursor-pointer py-1.5 font-bold"
          >
            <Logo className="w-32" />
          </Typography>
          <LanguageSwitcher className="hidden md:flex" />
        </div>

        <div className="hidden  w-full items-center justify-end gap-6 md:flex">
          <NavList />
        </div>
        <div className="flex gap-2">
          <button className="md:hidden" onClick={handleOpen}>
            {open ? menuCloseIcon : menuOpenIcon}
          </button>{" "}
        </div>
      </div>

      <MobileNav
        className="ml-0 flex w-screen flex-col bg-alb-site "
        open={open}
      >
        <NavList />
        <button className=" h-8  w-20 rounded-2xl bg-red-600 text-white ">
          Aplica
        </button>
      </MobileNav>
    </Navbar>
  );
}

export default Header;
