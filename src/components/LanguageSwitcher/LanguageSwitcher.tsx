"use client";

import React, { useState } from "react";
import Ro from "../../../public/imagini/header/ro.svg";
import It from "../../../public/imagini/header/it.svg";
import Ge from "../../../public/imagini/header/ge.svg";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import useOnclickOutside from "react-cool-onclickoutside";


const LanguageSwitcher = ({className:string}) => {
  const [open, setOpened] = useState(false);
  const [language, setLanguage] = useState("ro");
  const ref = useOnclickOutside(() => {
    setOpened(!open && false);
  });

  return (
    <div
      ref={ref}
      className={`${className} && relative flex  w-72 flex-col items-start justify-center`}
    >
      <div
        className="flex cursor-pointer items-center gap-2"
        onClick={() => setOpened(!open)}
        id="selector-limba"
      >
        {language === "ro" && <Ro className="h-5 w-5 rounded-[50px] " />}
        {language === "it" && <It className="h-5 w-5  " />}
        {language === "ge" && <Ge className="h-5 w-5 " />}

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
              setLanguage("ro");
              setOpened(false);
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
          <button
            onClick={() => {
              setLanguage("it");
              setOpened(false);
            }}
            className={`${
              language === "it" && "font-bold"
            } flex items-center gap-4`}
          >
            <It className="h-5 w-5 " /> <span>Italiana</span>
          </button>
          <button
            onClick={() => {
              setLanguage("ge");
              setOpened(false);
            }}
            className={`${
              language === "ge" && "font-bold"
            } flex items-center gap-4 hover:drop-shadow-2xl`}
          >
            <Ge className="h-5 w-5 " /> <span>Germana</span>
          </button>
        </div>
      )}
    </div>
  );
};
export default LanguageSwitcher;
