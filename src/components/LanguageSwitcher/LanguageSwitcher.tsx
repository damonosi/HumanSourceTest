"use client";
import { usePathname, useRouter, } from 'next/navigation';
import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import It from "@/public/imagini/header/it.svg";
import Ro from "@/public/imagini/header/ro.svg";
import Link from 'next/link';
interface Iclass {
  className?: string;
  params: { lang: string; country: string; };
}

const LanguageSwitcher = ({ className, params }: Iclass) => {
  const [open, setOpened] = useState(false);
  const [language, setLanguage] = useState(params.lang);
  const router = useRouter();
  console.log('lang:', params?.lang);
  console.log('country:', params?.country)
  const ref = useOnclickOutside(() => {
    setOpened(!open && false);
  });
  const pathName = usePathname();
  console.log('pathname:', pathName);

  return (
    <div
      ref={ref}
      className={`${className}  relative flex  w-72 flex-col items-start justify-center`}
    >
      <div
        className="flex cursor-pointer items-center gap-2"
        onClick={() => setOpened(!open)}
        id="selector-limba"
      >
        {language === "ro" && <Ro className="h-5 w-5 rounded-[50px] " />}
        {language === "it" && <It className="h-5 w-5  " />}


        {open ? (
          <MdOutlineKeyboardArrowUp />
        ) : (
          <MdOutlineKeyboardArrowUp className="rotate-180 " />
        )}
      </div>
      {open && (
        <div className="absolute top-full mt-2 flex flex-col gap-4 rounded-b-2xl bg-alb-site py-5 px-5">
          <button
            onClick={() => {

              setOpened(false);

              setLanguage("ro");
            }}
            className={`${
              language === "ro" && "font-bold"
            } flex items-center gap-4`}
          >
            {" "}
            <Ro
              className="h-5 w-5  
"
            />{" "}
            <span>Romana</span>
          </button>
          <Link href="/it/IT" onClick={() => {
            setOpened(false);
            setLanguage("it");
          }} className={`${language === "it" && "font-bold"
            } flex items-center gap-4`} locale='it-IT'>




            <It className="h-5 w-5 " /> <span>Italiana</span>

          </Link>
        </div>
      )}
    </div>
  );
};
export default LanguageSwitcher;
