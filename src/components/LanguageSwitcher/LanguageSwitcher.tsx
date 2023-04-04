"use client";

import { Typography } from "@mui/material";
import { useState } from "react";

interface ILanguageSwitcher {
  className?: string;
}

const LanguageSwitcher = ({ className }: ILanguageSwitcher) => {
  const [selected, setSelected] = useState("ro");

  return (
    <div className={`flex  gap-[5px] ${className}`}>
      <button
        onClick={() => setSelected("ro")}
        className={` ${
          selected === "ro" && "bg-gri-brand"
        } flex h-8 w-8  items-center justify-center rounded-full  border border-gri-brand p-4 md:h-10 md:w-10`}
        name="Ro"
        id="Ro"
      >
        <p
          className={`${
            selected === "ro" && "text-white"
          }  text-xs font-bold text-gri-brand md:text-sm`}
        >
          RO
        </p>
      </button>
      <button
        onClick={() => setSelected("it")}
        className={` ${
          selected === "it" && "bg-gri-brand"
        } flex h-8 w-8 items-center justify-center rounded-full border border-gri-brand p-4  md:h-10 md:w-10`}
        name="It"
        id="It"
      >
        <p
          className={`${
            selected === "it" && "text-white"
          } text-xs font-bold text-gri-brand md:text-sm`}
        >
          IT
        </p>
      </button>
    </div>
  );
};
export default LanguageSwitcher;
