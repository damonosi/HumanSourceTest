"use client";


import React, { useState } from "react";
import Ro from "../../../public/imagini/header/ro.svg";
import It from "../../../public/imagini/header/it.svg";
import Ge from "../../../public/imagini/header/ge.svg";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import useOnclickOutside from "react-cool-onclickoutside";
interface ILanguageSwitcher {
  className?: string;
}

const LanguageSwitcher = ({ className }: ILanguageSwitcher) => {
  const [open, setOpened] = useState(false);
  const [language, setLanguage] = useState("ro");
  const ref = useOnclickOutside(() => {
    setOpened(!open && false);
  });

  return (
    <div
      ref={ref}
      className="relative flex  w-72 flex-col items-start justify-center"
    >
      <div
        className="flex cursor-pointer items-center gap-2"
        onClick={() => setOpened(!open)}
        id="selector-limba"
      >
        {language === "ro" && <Ro className="h-5 w-5 rounded-[50px] " />}
        {language === "it" && <It className="h-5 w-5 rounded-[50px] " />}
        {language === "ge" && <Ge className="h-5 w-5 rounded-[50px]" />}

        {open ? (
          <MdOutlineKeyboardArrowUp />
        ) : (
          <MdOutlineKeyboardArrowUp className="rotate-180 " />
        )}
      </div>
      {open && (
        <div className="absolute top-full mt-2 flex flex-col gap-4 bg-alb-site py-5 px-2">
          <button
            onClick={() => {
              setLanguage("ro");
              setOpened(false);
            }}
            className=" flex items-center gap-4"
          >
            {" "}
            <Ro
              className="h-5 w-5 rounded-full 
"
            />{" "}
            <span>Romana</span>
          </button>
          <button
            onClick={() => {
              setLanguage("it");
              setOpened(false);
            }}
            className="flex items-center gap-4"
          >
            <It className="h-5 w-5 rounded-full" /> <span>Italiana</span>
          </button>
          <button
            onClick={() => {
              setLanguage("ge");
              setOpened(false);
            }}
            className="flex items-center gap-4"
          >
            <Ge className="h-5 w-5 rounded-full" /> <span>Germana</span>
          </button>
        </div>
      )}
    </div>
  );
};
export default LanguageSwitcher;
