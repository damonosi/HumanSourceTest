import CarduriHero from "./CardHero";

import PageTransitionWrapper from "@/utils/PageTransitionWrapper";
import { Typography } from "@material-tailwind/react";
import Harta from "../../../../public/imagini/hero/Harta.svg";
import Pinuri from "../../../../public/imagini/hero/Pinuri.svg";
import { useEffect, useRef } from "react";

let initialAnimation = { x: 0, opacity: 0 };
const HeroSection = () => {
  const pinuriRef = useRef();

  return (
    <section
      id="hero-section"
      className=" relative mx-0 flex flex-col   items-center overflow-hidden  bg-gri-bg    pt-0    md:flex-row  md:justify-center  "
    >
      <div className=" container relative flex w-full  flex-col-reverse items-center gap-12 bg-gradient-to-b  pb-56 lg:mx-16 lg:flex-row-reverse  ">
        <div className="relative hidden p-6 md:flex  md:w-full">
          <Harta
            className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform"
            alt="imagine-harta"
          />
          <PageTransitionWrapper
            initial={initialAnimation}
            className="z-20 flex w-full "
          >
            <Pinuri
              className=" w-full -translate-y-[15%] transform"
              alt="imagine-harta"
            />
          </PageTransitionWrapper>
        </div>
        <div className=" flex  flex-col md:hidden">
          <div className="relative flex min-h-[300px] w-full py-4">
            <Harta
              alt="imagine-harta"
              className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform"
            />
            <PageTransitionWrapper
              initial={initialAnimation}
              className="z-20 flex w-full "
            >
              <Pinuri
                className=" w-full -translate-y-[7%] transform"
                alt="imagine-harta"
              />
            </PageTransitionWrapper>
          </div>

          <CarduriHero />
        </div>
        <div
          className="  z-30 flex flex-col-reverse items-center justify-start gap-16 px-6  text-white md:w-3/4 md:flex-col md:gap-0 md:p-24 md:px-0   "
          id="container-text-carduri"
        >
          {" "}
          <div
            className=" flex  w-full flex-col gap-6 pt-6 text-start lg:pb-16"
            id="container-text"
          >
            <Typography
              variant="small"
              className="uppercase text-white opacity-80 "
            >
              AGENTIE DE PLASARE FORȚĂ DE MUNCĂ
            </Typography>
            <Typography variant="h2" className="text-start  text-white  ">
              Construiește-ți viitorul <br /> alături de noi
            </Typography>
            <Typography variant="paragraph" className="font-light">
              HumanSource - alege să colaborezi cu noi pentru job-ul tau de vis
              sau <br className="hidden md:block" /> pentru gasirea candidatului
              potrivit.{" "}
            </Typography>
          </div>
          <div className="hidden w-full md:block">
            <CarduriHero />
          </div>{" "}
        </div>{" "}
      </div>
    </section>
  );
};

export default HeroSection;
