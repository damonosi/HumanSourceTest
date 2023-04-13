import CarduriHero from "./CardHero";

import { Typography } from "@material-tailwind/react";

import { HartaHeroDesktop, HartaHeroMobil } from "./HartaHero";

let initialAnimation = { x: 0, opacity: 0 };
const HeroSection = () => {
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
          className="  flex w-full flex-col md:hidden"
          id="container harta carduri mobil"
        >
          <div className="  flex  w-full items-center py-4">
            <HartaHeroMobil />
          </div>

          <CarduriHero />
        </div>
        <div
          className="  z-30 flex flex-col-reverse items-center justify-start gap-16 px-6   text-alb-site md:flex-col md:gap-0 md:px-0 lg:w-2/4    "
          id="container-text-carduri"
        >
          <div
            className=" flex  w-full flex-col gap-6 pt-6 text-start text-alb-site  lg:pb-16"
            id="container-text"
          >
            <Typography variant="small" className="uppercase opacity-80">
              AGENTIE DE PLASARE FORȚĂ DE MUNCĂ
            </Typography>
            <Typography
              variant="h1"
              className="text-start font-bold text-alb-site  "
            >
              Construiește-ți viitorul <br /> alături de noi
            </Typography>
            <Typography variant="paragraph" className="font-[350]  opacity-80">
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
