import CarduriHero from "./CardHero";

import PageTransitionWrapper from "@/utils/PageTransitionWrapper";
import { Typography } from "@material-tailwind/react";
import HartaHero from "../../../../public/imagini/hero/hartaPinuri.svg";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className=" relative mx-0 flex flex-col  overflow-hidden bg-colors-gri-bg  pt-0    lg:flex-row    lg:items-center  lg:justify-center  "
    >
      <PageTransitionWrapper className=" container relative flex w-full  flex-col-reverse bg-gradient-to-b pb-56  lg:mx-16 lg:flex-row-reverse  ">
        {" "}
        <div className="flex md:w-full" id="container-harta">
          <HartaHero className="h-auto w-full" alt="imagine-harta" />
        </div>
        <div className="block md:hidden">
          <CarduriHero />
        </div>
        <div
          className="  z-30 flex flex-col-reverse items-center justify-start gap-16 px-6  text-white md:w-3/4 md:flex-col md:gap-0 md:p-24 md:px-0   "
          id="container-text-carduri"
        >
          {" "}
          <div
            className=" flex  w-full flex-col gap-2 pt-6 text-start lg:pb-16"
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
          <div className="hidden w-full lg:block">
            <CarduriHero />
          </div>{" "}
        </div>
      </PageTransitionWrapper>{" "}
    </section>
  );
};

export default HeroSection;
