"use client";

import AvantajeSection from "../components/Home/Avantaje/AvantajeSection";
import BlogSection from "../components/Home/Blog/BlogSection";
import HeroSection from "../components/Home/Hero/HeroSection";
import IntrebariSection from "../components/Home/Intrebari/IntrebariSection";
import NevoiSection from "../components/Home/Nevoi/NevoiSection";
import ParteneriSection from "../components/Home/Parteneri/ParteneriSection";
import ServiciiSection from "../components/Home/Servicii/ServiciiSection";

export default function Home() {
  return (
    <div
      className="   mb-[-10rem] grid grid-cols-1 items-center justify-center "
      id="container-home"
    >
      <HeroSection />

      <div className=" h-full  translate-y-[-10rem]  ">
        <div
          className="mx-1 flex flex-col items-center justify-center rounded-t-[10px]  bg-alb-site  md:mx-2    md:py-[60px] md:pb-[160px]"
          id="background"
        >
          <AvantajeSection />
        </div>
        <div
          className="mx-1 flex flex-col items-center  justify-center  bg-gri-bg md:mx-2  md:px-16  "
          id="background"
        >
          <NevoiSection />
        </div>
        <div
          className="mx-1 flex flex-col items-center  justify-center bg-alb-site  pb-32 md:mx-2 md:px-16  md:pb-[180px]"
          id="background"
        >
          <ServiciiSection />
        </div>{" "}
        <div
          className="mx-1 flex flex-col items-center justify-center  bg-gri-bg pb-[60px] md:mx-2 md:px-16  md:pb-[0px] "
          id="background"
        >
          <IntrebariSection />{" "}
        </div>
        <div
          className="mx-1 flex flex-col items-center justify-center  rounded-b-[10px]  bg-white pb-12  md:mx-2 md:px-16 "
          id="background"
        >
          <BlogSection />
          <ParteneriSection />
        </div>
      </div>
    </div>
  );
}
