"use client";
import Harta from "../../../../public/imagini/hero/Harta.svg";
import HartaMobil from "../../../../public/imagini/hero/HartaMobil.svg";
import Pin1 from "../../../../public/imagini/hero/pinguri/ping1.svg";
import IPin1 from "../../../../public/imagini/hero/pinguri/iPing1.png";
import IPin2 from "../../../../public/imagini/hero/pinguri/iPing2.png";
import IPin3 from "../../../../public/imagini/hero/pinguri/iPing3.png";
import IPin4 from "../../../../public/imagini/hero/pinguri/iPing4.png";
import IPin5 from "../../../../public/imagini/hero/pinguri/iPing5.png";
import IPin6 from "../../../../public/imagini/hero/pinguri/iPing6.png";
import IPin7 from "../../../../public/imagini/hero/pinguri/iPing7.png";
import IPin8 from "../../../../public/imagini/hero/pinguri/iPing8.png";
import IPin9 from "../../../../public/imagini/hero/pinguri/iPing9.png";
import Image, { StaticImageData } from "next/image";
import InViewWrapper from "@/utils/InViewWrapper";
import { useState, useLayoutEffect, Fragment } from "react";

interface IPinComponent {
  src: StaticImageData;
  className: string;
  dimensions: number;

  translateX: number;
  translateY: number;
}

const PinComponent = ({
  src,
  className,
  dimensions,
  translateX,
  translateY,
}: IPinComponent) => {
  return (
    <InViewWrapper
      inView={{
        translateY: translateY,
        translateX: translateX,
        opacity: 1,
      }}
      notInView={{
        translateY: 10,
        opacity: 0,
      }}
      transition={{
        type: "spring",
        ease: "linear",
        damping: 10,
        stiffness: 80,
      }}
      className={`absolute  ${className} z-40 h-[${dimensions}px] w-[${dimensions}px] transform`}
    >
      <div className={`  relative h-[${dimensions}px] w-[${dimensions}px]`}>
        <Pin1 width={dimensions} height={dimensions} />
        <Image
          alt="img-ping-1"
          className=" 	absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-2/3 transform "
          src={src}
        />
      </div>
    </InViewWrapper>
  );
};
export const HartaHeroDesktop = () => {
  return (
    <div className="relative block     ">
      <PinComponent
        src={IPin1}
        translateX={10}
        translateY={-87}
        className=" bottom-0  "
        dimensions={95}
      />
      <PinComponent
        src={IPin2}
        translateX={80}
        translateY={77}
        className=" top-0  "
        dimensions={60}
      />
      <PinComponent
        src={IPin3}
        translateX={20}
        translateY={-10}
        className=" top-0  "
        dimensions={43}
      />
      <PinComponent
        src={IPin4}
        translateX={-50}
        translateY={-50}
        className=" top-1/2 right-1/2 "
        dimensions={70}
      />
      <PinComponent
        src={IPin5}
        translateX={-20}
        translateY={20}
        className=" top-0 right-1/2 "
        dimensions={44}
      />
      <PinComponent
        src={IPin6}
        translateX={50}
        translateY={-40}
        className=" top-1/2 right-1/2 "
        dimensions={109}
      />
      <PinComponent
        src={IPin7}
        translateX={-50}
        translateY={-50}
        className=" top-1/2 right-0 "
        dimensions={73}
      />
      <PinComponent
        src={IPin8}
        translateX={-50}
        translateY={-50}
        className=" top-0 right-0 "
        dimensions={52}
      />
      <PinComponent
        src={IPin9}
        translateX={-50}
        translateY={-50}
        className=" bottom-0 right-0 "
        dimensions={106}
      />

      <Harta className="relative z-10  " alt="imagine-harta" />
    </div>
  );
};
export const HartaHeroMobil = () => {
  return (
    <Fragment>
      <div className="relative  flex h-full w-[120%] md:w-full ">
        <div className=" z-30 flex h-full   w-full" id="container-pinuri">
          <PinComponent
            src={IPin1}
            translateX={70}
            translateY={77}
            className=" top-0  "
            dimensions={60}
          />
        </div>
        <HartaMobil
          className="absolute top-1/2 left-1/2 z-10 w-[120%] -translate-x-1/2 -translate-y-1/2  transform object-fill md:w-full"
          alt="imagine-harta"
        />
        ;
      </div>
    </Fragment>
  );
};
