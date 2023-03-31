import InViewWrapper from "@/utils/InViewWrapper";
import {
  CardBody,
  CardHeader,
  Button,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import CoverBlogSmall from "../../../../public/imagini/blog/cover-blog-small.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
        opacity: 0.5,
        translateY: 100,
      }}
      transition={{
        duration: 1,
        type: "spring",
        damping: 10,
        stiffness: 100,
      }}
      className=""
    >
      <div
        className="absolute bottom-0  top-0 left-0 right-0 z-10 h-full bg-card-blog transition delay-100 ease-in-out"
        id="content-mask"
      />{" "}
      <CardBody
        className="z-20  flex   flex-col justify-between gap-10 px-1 py-24 text-start  text-white md:gap-4"
        id="container-text-bloguri"
      >
        <div className="h-1/3"></div>
        <Typography
          variant="paragraph"
          className="z-20 text-[18px] font-[350] text-alb-site opacity-50"
        >
          {data}
        </Typography>
        <Typography
          variant="h4"
          className="z-20 text-[31px] font-[750] leading-[42px]"
        >
          {titlu}
        </Typography>
        <Typography
          variant="paragraph"
          className="z-20 text-[18px] font-[400] leading-[22px]"
        >
          {continut}
        </Typography>
        <Button className="z-20 mt-4 bg-transparent text-start  text-[#FCFEFF] shadow-none">
          <span className="text-rosu-brand">Citeste mai mult</span>{" "}
          <ArrowForwardIcon />
        </Button>
      </CardBody>
    </InViewWrapper>
  );
};

export default Fata2Card;
