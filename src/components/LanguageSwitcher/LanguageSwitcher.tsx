"use client";

import { Typography } from "@mui/material";
import { useState } from "react";

const LanguageSwitcher = () => {
  const [selected, setSelected] = useState("ro");

  return (
    <div className="flex  gap-[5px]">
      <button
        onClick={() => setSelected("ro")}
        className={` ${
          selected === "ro" && "bg-gri-brand"
        } flex w-[42px] items-center justify-center  rounded-full border border-gri-brand p-2`}
        name="Ro"
        id="Ro"
      >
        <Typography
          className={`${
            selected === "ro" && "text-white"
          }  font-bold text-gri-brand`}
        >
          RO
        </Typography>
      </button>
      <button
        onClick={() => setSelected("it")}
        className={` ${
          selected === "it" && "bg-gri-brand"
        } flex w-[42px]  items-center justify-center rounded-full border border-gri-brand p-2`}
        name="It"
        id="It"
      >
        <Typography
          className={`${
            selected === "it" && "text-white"
          }  font-bold text-gri-brand`}
        >
          IT
        </Typography>
      </button>
    </div>
  );
};
export default LanguageSwitcher;
