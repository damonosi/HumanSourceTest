import CarduriHero from "./CardHero";

import PageTransitionWrapper from "@/utils/PageTransitionWrapper";
import HartaHero from "../../../../public/imagini/hero/hartaPinuri.svg";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className=" relative mx-0 flex flex-col  overflow-hidden bg-colors-gri-bg  pt-0    lg:flex-row    lg:items-center  lg:justify-center  "
    >
      <PageTransitionWrapper className=" container relative flex w-full  flex-col-reverse bg-gradient-to-b pb-56  lg:mx-16 lg:flex-row-reverse  ">
        {" "}
        <div className="flex lg:w-2/3" id="container-harta">
          <HartaHero className="w-full" alt="imagine-harta" />
        </div>
        <div className="block lg:hidden">
          <CarduriHero />
        </div>
        <div
          className="  z-30 flex flex-col-reverse items-center justify-start gap-16 px-6  text-white lg:w-1/3 lg:flex-col lg:gap-0 lg:p-24 lg:px-0   "
          id="container-text-carduri"
        >
          {" "}
          <div
            className=" flex  w-full flex-col gap-2 pt-6 text-start lg:pb-16"
            id="container-text"
          >
            <h1 className="text-start text-[1rem] font-[350] leading-[1.5rem] text-white opacity-80 lg:text-base lg:font-[500]   lg:leading-[1.25rem] ">
              AGENTIE DE PLASARE FORȚĂ DE MUNCĂ
            </h1>
            <h2 className="text-start text-[2rem] font-[700]  leading-[2.625rem] text-white lg:text-[3rem] lg:text-5xl lg:font-[800]   lg:leading-[4rem]">
              Construiește-ți viitorul <br /> alături de noi
            </h2>
            <p className="hidden lg:block lg:text-[1rem] lg:font-[350] lg:leading-[1.5rem]">
              HumanSource - alege să colaborezi cu noi pentru job-ul tau de vis
              sau <br /> pentru gasirea candidatului potrivit.{" "}
            </p>
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
