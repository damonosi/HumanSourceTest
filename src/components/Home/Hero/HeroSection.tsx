import CarduriHero from "./CardHero";

import PageTransitionWrapper from "@/utils/PageTransitionWrapper";
import { Typography } from "@material-tailwind/react";

import { useEffect, useRef } from "react";
import { HartaHeroDesktop, HartaHeroMobil } from "./HartaHero";

let initialAnimation = { x: 0, opacity: 0 };
const HeroSection = () => {
  const pinuriRef = useRef();

  return (
    <section
      id="hero-section"
      className=" relative mx-0 flex flex-col   items-center overflow-hidden  bg-gri-bg  pt-14  md:flex-row    md:justify-center    "
    >
      <div className=" container  flex w-full  flex-col-reverse   items-center gap-12  bg-gradient-to-b  pb-56 lg:mx-16 lg:flex-row-reverse  ">
        <div className=" relative hidden h-full md:block md:w-1/2">
          <HartaHeroDesktop />
        </div>
        <div
          className="  flex flex-col px-[20px] md:hidden"
          id="container harta carduri mobil"
        >
          <div className="  flex min-h-[300px] w-full items-center py-4">
            <HartaHeroMobil />
          </div>

          <CarduriHero />
        </div>
        <div
          className="  z-30 flex flex-col-reverse items-center justify-start gap-16 px-6   text-white md:flex-col md:gap-0 md:px-0 lg:w-2/4    "
          id="container-text-carduri"
        >
          <div
            className=" flex  w-full flex-col gap-6 pt-6 text-start text-alb-site opacity-80 lg:pb-16"
            id="container-text"
          >
            <Typography variant="small" className="uppercase ">
              AGENTIE DE PLASARE FORȚĂ DE MUNCĂ
            </Typography>
            <Typography variant="h1" className="text-start    ">
              Construiește-ți viitorul <br /> alături de noi
            </Typography>
            <Typography variant="paragraph" className="font-[350]  ">
              HumanSource - alege să colaborezi cu noi pentru job-ul tau de vis
              sau <br className="hidden md:block" /> pentru gasirea candidatului
              potrivit.{" "}
            </Typography>
          </div>
          <div className=" hidden w-full md:block">
            <CarduriHero />
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default HeroSection;
