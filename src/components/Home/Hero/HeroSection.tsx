
import CarduriHero from "./CardHero";

import { Typography } from "@material-tailwind/react";



import { useTranslation } from './../../../app/i18n/client';
import { HartaHeroDesktop, HartaHeroMobil } from "./HartaHero";



const HeroSection = (
  { params }: { params: { lang: string; country: string; }; }
) => {

  const { t } = useTranslation(params.lang, 'home-hero');

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
              {t('titlu')}
            </Typography>
            <Typography
              variant="h1"
              className="text-start font-bold text-alb-site  "
            >
              {t('subtitlu')}
            </Typography>
            <Typography variant="paragraph" className="font-[350]  opacity-80">
              {t('indemn')}
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
