import Harta from "../../../../public/imagini/hero/Harta.svg";
import Pin1 from "../../../../public/imagini/hero/pinguri/ping1.svg";
import IPin1 from "../../../../public/imagini/hero/pinguri/iPing1.png";
import Image, { StaticImageData } from "next/image";
import InViewWrapper from "@/utils/InViewWrapper";

interface IPinComponent {
  src: StaticImageData;
  className: string;
  hPin: number;
  wPin: number;
}

const PinComponent = ({ src, className, hPin, wPin }: IPinComponent) => {
  return (
    <InViewWrapper
      inView={{
        translateY: 0,
      }}
      notInView={{
        translateY: 10,
      }}
      transition={{
        duration: 2,
        type: "spring",
        ease: "linear",
        damping: 10,
        stiffness: 100,
      }}
      className={`absolute  ${className} z-40 h-[${hPin}px] w-[${wPin}px]`}
    >
      {" "}
      <div className={`  relative h-[${hPin}px] w-[${wPin}px]`}>
        <Pin1 width={wPin} height={hPin} />
        <Image
          alt="img-ping-1"
          className=" 	absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 transform "
          src={src}
        />
      </div>
    </InViewWrapper>
  );
};
const HartaHero = () => {
  return (
    <div className="relative  flex h-full w-full ">
      <div className=" z-30 flex h-full   w-full" id="container-pinuri">
        <PinComponent src={IPin1} className="" hPin={39.4} wPin={31.2} />
        <PinComponent src={IPin1} className="right-0" hPin={39.4} wPin={31.2} />
        <PinComponent src={IPin1} className="top-0" hPin={39.4} wPin={31.2} />
        <PinComponent
          src={IPin1}
          className="bottom-0"
          hPin={39.4}
          wPin={31.2}
        />
        <PinComponent src={IPin1} className="left-0" hPin={39.4} wPin={31.2} />
      </div>
      <Harta
        className="absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 transform"
        alt="imagine-harta"
      />
    </div>
  );
};

export default HartaHero;
