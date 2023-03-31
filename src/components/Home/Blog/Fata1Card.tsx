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
      <CardHeader className="mx-0 mt-0 flex min-h-min  w-full rounded-none rounded-t-xl">
        <Image
          alt="cover-img-small"
          className="z-10 w-screen object-cover"
          src={CoverBlogSmall}
        />
      </CardHeader>{" "}
      <CardBody
        className="z-20 flex h-full flex-col  justify-between gap-2 px-1 text-start md:gap-4 md:p-4 "
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
