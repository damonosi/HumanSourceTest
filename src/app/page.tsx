"use client";

import React, { Suspense } from "react";
import HeroSection from "../components/Home/Hero/HeroSection";
const AvantajeSection = React.lazy(
  () => import("../components/Home/Avantaje/AvantajeSection")
);
const BlogSection = React.lazy(
  () => import("../components/Home/Blog/BlogSection")
);

  

const IntrebariSection = React.lazy(
  () => import("../components/Home/Intrebari/IntrebariSection")
);
const NevoiSection = React.lazy(
  () => import("../components/Home/Nevoi/NevoiSection")
);
const ParteneriSection = React.lazy(
  () => import("../components/Home/Parteneri/ParteneriSection")
);
const ServiciiSection = React.lazy(
  () => import("../components/Home/Servicii/ServiciiSection")
);

export default function Home() {
  return (
    <div
      className="   mb-[-10rem] grid grid-cols-1 items-center justify-center "
      id="container-home"
    >
      <HeroSection />

      <div className=" h-full  translate-y-[-10rem]  ">
        <div
          className="mx-1 flex  flex-col items-center justify-center rounded-t-[10px] bg-alb-site px-4   md:mx-2    md:py-[100px] "
          id="background"
        >
          <Suspense fallback={<div>Loading...</div>}>
            <AvantajeSection />
          </Suspense>
        </div>
        <div
          className="mx-1 flex flex-col items-center justify-center bg-gri-bg  px-4 md:mx-2  md:px-16  "
          id="background"
        >
          <Suspense fallback={<div>Loading...</div>}>
            <NevoiSection />
          </Suspense>
        </div>
        <div
          className="mx-1 flex flex-col items-center  justify-center bg-alb-site  pb-32 pt-[100px] md:mx-2 md:px-16  md:py-[100px]"
          id="background"
        >
          <Suspense fallback={<div>Loading...</div>}>
            <ServiciiSection />
          </Suspense>
        </div>{" "}
        <div
          className="mx-1 flex flex-col items-center justify-center  bg-gri-bg pb-[60px] md:mx-2 md:px-16  md:pb-[0px] "
          id="background"
        >
          {" "}
          <Suspense fallback={<div>Loading...</div>}>
            <IntrebariSection />
          </Suspense>
        </div>
        <div
          className="mx-1 flex flex-col items-center justify-center  rounded-b-[10px]  bg-white pb-12  md:mx-2 md:px-16 "
          id="background"
        >
          <Suspense fallback={<div>Loading...</div>}>
            <BlogSection />{" "}
          </Suspense>{" "}
          <Suspense fallback={<div>Loading...</div>}>
            <ParteneriSection />{" "}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
