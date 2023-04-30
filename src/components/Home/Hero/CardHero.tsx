import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { CardContent } from "@mui/material";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { MdEngineering, MdPersonSearch } from "react-icons/md";
import dateHero from "./dateHero";

interface ICardHero {
  titlu: string;
  icon: string;
  descriere: string;
  link: string;
  textButon: string;
}

const CardHero = ({ titlu, icon, descriere, link, textButon }: ICardHero) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <AnimatePresence>
      <motion.div
        key="container-card"
        className={`flex  flex-col gap-2 items-center justify-center  rounded-[16px] hover:drop-shadow-2xl   px-3 text-center text-gri-brand   drop-shadow-card-hero  md:h-[194px]   w-full  md:px-6 md:pt-2    ${icon === "angajator" && "md:rounded-bl-[30px] md:rounded-tr-[0px] "
          }  ${icon === "muncitor" && " md:rounded-bl-[30px] md:rounded-tl-[0px] "}  ${
          !hovered ? "  " : ""
        }`}
        style={{
          backgroundColor: hovered ? "#D0D0D0" : "#FCFEFF",
        }}
        layout
        transition={{
          layout: {
            type: "spring",
            stiffness: 20,
            duration: 1,
          },
        }}
        id="card-hero"
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}

      >
        <CardContent className=" flex h-full justify-between gap-4 px-0  gap-y-3 md:px-0 ">
          <motion.div className="hidden h-12 w-12 justify-center  md:visible md:flex">
            {" "}
            {icon === "angajator" ? (
              <MdPersonSearch
                className={`h-full w-full text-rosu-brand `}
              />
            ) : (
              <MdEngineering
                  className={` h-full w-full text-rosu-brand `}
              />
            )}
          </motion.div>
          <motion.div
            layout
            className={`flex w-full flex-col items-start justify-between text-gri-brand  md:w-4/5} `}
          >
            <div className="flex w-full items-center gap-2">
              <div className="flex  md:hidden ">
                <motion.div layout className="flex py-2">
                  {icon === "angajator" ? (
                    <MdPersonSearch
                      className={` h-6 w-6 text-rosu-brand `}
                    />
                  ) : (
                    <MdEngineering
                        className={` h-6 w-6 text-rosu-brand  `}
                    />
                  )}
                </motion.div>
              </div>
              <Typography
                variant="paragraph"
                className={`font-bold uppercase  md:text-xl md:capitalize text-brand-gri  `}
              >
                {titlu}
              </Typography>
            </div>
            <Typography variant="small" className="text-start font-[350]">
              {descriere}
            </Typography>
            <Link href={`/${link}`} className="w-full ">
              <Button
                variant="text"
                ripple={true}
                className={`flex w-full items-center gap-2 px-0 capitalize  hover:bg-transparent text-rosu-brand active:bg-transparent md:text-left `}
              >
                {textButon}

                {hovered ? (
                  <motion.span
                    key="sageata"
                    layout
                    transition={{
                      layout: {
                        type: "spring",
                        stiffness: 20,
                        duration: 1,
                      },
                    }}
                  >
                    <ArrowSmallRightIcon strokeWidth={2} className="h-5 w-5" />
                  </motion.span>
                ) : (
                  ""
                )}
              </Button>
            </Link>{" "}
          </motion.div>
        </CardContent>
      </motion.div>
    </AnimatePresence>
  );
};

const CarduriHero = () => {
  return (
    <div
      id="container-carduri  "
      className="relative z-20  px-5 flex w-full  items-center justify-center gap-4    md:px-0 "
    >
      {dateHero.map(({ titlu, icon, descriere, link, textButon, id }) => (
        <CardHero
          key={id}
          titlu={titlu}
          icon={icon}
          descriere={descriere}
          link={link}
          textButon={textButon}
        />
      ))}
    </div>
  );
};

export default CarduriHero;
