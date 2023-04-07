import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { CardContent } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import dateHero from "./dateHero";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlinePersonSearch } from "react-icons/md";
import { MdEngineering } from "react-icons/md";

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
        className={`grid h-[194px] w-[165px] grid-cols-1 items-center justify-between  rounded-t-[30px] rounded-br-[30px]   px-2 text-center text-gri-brand  drop-shadow-card-hero  md:h-[194px]   md:w-full  md:px-6 md:pt-2    ${
          icon === "angajator" && "rounded-bl-[30px] rounded-tr-[0px] "
        }  ${icon === "muncitor" && " rounded-bl-[30px] rounded-tl-[0px] "}  ${
          !hovered ? "  " : ""
        }`}
        style={{
          backgroundColor: hovered ? "#B82C2F" : "#FCFEFF",
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
        onTouchEnd={() => {
          setHovered(!hovered);
        }}
      >
        <CardContent className=" flex h-full justify-between gap-4 px-0   md:px-0 ">
          <motion.div className="hidden h-12 w-12  md:visible md:flex">
            {" "}
            {icon === "angajator" ? (
              <MdOutlinePersonSearch
                className={`h-full w-full ${
                  hovered ? "text-alb-site " : "text-rosu-brand"
                }`}
              />
            ) : (
              <MdEngineering
                className={` h-full w-full  ${
                  hovered ? "text-alb-site " : "text-rosu-brand"
                }`}
              />
            )}
          </motion.div>
          <motion.div
            layout
            className={`flex w-full flex-col items-start justify-between  md:w-4/5 ${
              hovered ? "text-alb-site " : "text-gri-brand"
            } `}
          >
            <div className="flex w-full items-center gap-2">
              <div className="flex  md:hidden ">
                <motion.div layout className="flex py-2">
                  {icon === "angajator" ? (
                    <MdOutlinePersonSearch
                      className={` h-6 w-6 ${
                        hovered ? "text-alb-site " : "text-rosu-brand"
                      }`}
                    />
                  ) : (
                    <MdEngineering
                      className={` h-6 w-6  ${
                        hovered ? "text-alb-site " : "text-rosu-brand"
                      }`}
                    />
                  )}
                </motion.div>
              </div>
              <Typography
                variant="paragraph"
                className={`font-bold uppercase  md:text-xl md:capitalize ${
                  hovered ? "text-alb-site" : "text-brand-gri"
                } `}
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
                className={`flex w-full items-center gap-2 px-0 capitalize  hover:bg-transparent  active:bg-transparent md:text-left  ${
                  hovered ? "text-alb-site " : "text-rosu-brand"
                }`}
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
      className="relative z-20 flex w-full  items-center justify-center gap-5    md:px-0 "
    >
      {dateHero.map(({ titlu, icon, descriere, link, textButon, id, src }) => (
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
