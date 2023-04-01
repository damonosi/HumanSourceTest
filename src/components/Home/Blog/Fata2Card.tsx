import InViewWrapper from "@/utils/InViewWrapper";
import { CardBody, Button, Typography } from "@material-tailwind/react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import BackImg from "../../../../public/imagini/blog/cover-blog-full.png";
interface IFata1Blog {
  data: string;
  titlu: string;
  continut: string;
}

const Fata2Card = ({ data, titlu, continut }: IFata1Blog) => {
  return (
    <InViewWrapper
      inView={{
        opacity: 1,
        translateY: 0,
      }}
      notInView={{
        opacity: 0.9,
        translateY: -10,
      }}
      transition={{
        duration: 2,
        type: "spring",
        ease: "linear",
        damping: 10,
        stiffness: 100,
      }}
      className="relative flex h-full flex-col bg-black"
    >
      <Image
        alt="background"
        className="absolute z-10 h-screen w-full object-cover"
        src={BackImg}
      />
      <div className="h-1/2 "></div>
      <CardBody
        className="z-20  flex   h-1/2 flex-col justify-between gap-2  px-4  text-start  text-white "
        id="container-text-bloguri"
      >
        <Typography
          variant="paragraph"
          className="z-20 text-[18px] font-[350] text-alb-site opacity-50"
        >
          {data}
        </Typography>
        <Typography variant="h4" className="z-20 font-medium ">
          {titlu}
        </Typography>
        <Typography
          variant="paragraph"
          className="z-20 text-[18px] font-[400] leading-[22px]"
        >
          {continut}
        </Typography>
        <Button className="z-20 mt-4 bg-transparent text-start  text-alb-site shadow-none">
          <span className="text-alb-site">Citeste mai mult</span>{" "}
          <ArrowForwardIcon />
        </Button>
      </CardBody>
    </InViewWrapper>
  );
};

export default Fata2Card;
