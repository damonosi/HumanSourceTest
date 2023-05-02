"use client";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import {
  Button,
  MobileNav,
  Navbar,
  Typography
} from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";

import Hamburger from "@/public/imagini/hamburger.svg";
import Logo from "@/public/imagini/logo.svg";
import { useTranslation } from "../i18n/client";
import { useRouter } from "next/navigation";

interface INavItem {
	label: string;
	href: string;
	handleCloseMenu: () => void;
}
function NavItem({ label, href, handleCloseMenu }: INavItem) {
	return (
		<Link href={href}>
			<Typography variant="small" className="flex  items-center gap-1.5 p-1 text-gri-brand" onClick={handleCloseMenu}>
				{label}
			</Typography>
		</Link>
	);
}

function NavList({
	params,
	handleCloseMenu,
}: {
	params: { lang: string; country: string };
	handleCloseMenu: () => void;
}) {
	const router = useRouter();
	const { t } = useTranslation(params.lang, "header");
	return (
		<ul className=" flex w-full flex-col justify-end  gap-3 md:flex-row md:items-center md:gap-8">
			{/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
              // @ts-ignore */}
			<NavItem handleCloseMenu={handleCloseMenu} href={`${params.lang}/despre-noi`} label={t("despre")} />
			<NavItem handleCloseMenu={handleCloseMenu} href={`${params.lang}/locuri-de-munca`} label={t("munca")} />
			<NavItem handleCloseMenu={handleCloseMenu} href={`${params.lang}/contact`} label={t("contact")} />
			<NavItem handleCloseMenu={handleCloseMenu} href={`${params.lang}/servicii`} label={t("servicii")} />
			{/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
              // @ts-ignore */}
			<NavItem handleCloseMenu={handleCloseMenu} href={`${params.lang}/blog`} label={t("blog")} />

			<Button
				ripple={true}
				className="hidden rounded-full  bg-red-800 px-4 py-3 text-white hover:shadow-none md:inline-block"
				onClick={() => router.push(`${params.lang}/formular`)}
			>
				{/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
              // @ts-ignore */}
				{t("buton")}
			</Button>
		</ul>
	);
}

export function Header({ params }: { params: { lang: string; country: string; }; }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleCloseMenu = () => {
    setOpen(false);
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
      className="fixed z-50 h-[60px] w-full  items-center  justify-center border-b border-alb-site bg-alb-site  py-0 px-0  md:px-[70px] "
    >
      <div className="container mx-auto flex h-[60px]  w-full items-center justify-between  px-4 text-gri-brand md:px-0">
        <div className="flex w-1/3 ">
          <Typography
            as="a"
            href={`/${params.lang}`}
            variant="small"
            color="black"
            className="mr-4 cursor-pointer py-1.5 font-bold"
          >
            <Logo className="w-32" />
          </Typography>
          <LanguageSwitcher params={params} className=" md:flex" />
        </div>

        <div className="hidden  w-full items-center justify-end gap-6 md:flex">
          <NavList handleCloseMenu={handleCloseMenu} params={params} />
        </div>
        <div className="flex gap-2">
          <button className="md:hidden" onClick={handleOpen}>
            {open ? menuCloseIcon : menuOpenIcon}
          </button>
        </div>
      </div>
      <MobileNav className="md:hidden  bg-alb-site px-4 text-center py-4" open={open}>
        <NavList handleCloseMenu={handleCloseMenu} params={params} />
     
      </MobileNav>
    </Navbar>
  );
}

export default Header;
