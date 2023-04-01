import InViewWrapper from "@/utils/InViewWrapper";
import {
  CardBody,
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import CoverBlogSmall from "../../../../public/imagini/blog/cover-blog-small.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface IFata1Blog {
  data: string;
  titlu: string;
  continut: string;
}

const Fata1Card = ({ data, titlu, continut }: IFata1Blog) => {
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
      className="block"
    >
      <CardHeader className="mx-0 mt-0 flex min-h-min  w-full rounded-none rounded-t-xl">
        <Image
          alt="cover-img-small"
          className="z-10 w-screen object-cover"
          src={CoverBlogSmall}
        />
      </CardHeader>{" "}
      <CardBody
        className="z-20 flex h-full flex-col   gap-2 px-4 text-start   "
        id="container-text-bloguri"
      >
        {" "}
        <Typography variant="paragraph" className=" font-[500]   opacity-50  ">
          {data}
        </Typography>
        <Typography
          variant="h4"
          className="max-w-[340px] text-[24px] font-[500] leading-[36px] "
        >
          {titlu}
        </Typography>
        <Typography
          variant="paragraph"
          className="text-[16px] font-[350] leading-[24px] "
        >
          {continut}
        </Typography>
        <Button className="mt-4 bg-transparent text-start text-rosu-brand shadow-none ">
          <span className="text-rosu-brand">Citeste mai mult</span>{" "}
          <ArrowForwardIcon />
        </Button>{" "}
      </CardBody>
    </InViewWrapper>
  );
};

export default Fata1Card;
