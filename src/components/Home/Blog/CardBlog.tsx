import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CoverBlogFull from "../../../../public/imagini/blog/cover-blog-full.png";
import CoverBlogSmall from "../../../../public/imagini/blog/cover-blog-small.png";

import InViewWrapper from "@/utils/InViewWrapper";
import Image from "next/image";
import { useState } from "react";

interface ICardBlog {
  data: string;
  titlu: string;
  continut: string;
  id: number;
}

const CardBlog = ({ data, titlu, continut, id }: ICardBlog) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <Card
      className={`relative flex h-[550px] flex-col overflow-hidden rounded-2xl  text-[#383A3C]  md:w-full  ${
        hovered && "justify-between text-[#ffff] "
      } `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={` flex  ${
          hovered &&
          "absolute  bottom-0 top-0 left-0 right-0 z-20 h-full bg-card-blog transition delay-100 ease-in-out"
        }`}
        id="content-mask"
      />
      <InViewWrapper
        inView={{
          opacity: 1,
        }}
        notInView={{
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="flex"
      >
        <CardHeader className="flex min-h-min">
          {hovered ? (
            <Image
              alt="cover-img-small"
              className="absolute  z-30 h-screen w-screen object-cover"
              src={CoverBlogFull}
            />
          ) : (
            <Image
              alt="cover-img-small"
              className="object-cover"
              src={CoverBlogSmall}
            />
          )}
        </CardHeader>
      </InViewWrapper>
      <CardBody
        className={`z-20 flex h-full flex-col  justify-between gap-2 px-1 text-start md:gap-4 md:p-4 ${
          hovered && "h-2/3 gap-10  py-24 text-white"
        }`}
        id="container-text-bloguri"
      >
        <Typography
          variant="paragraph"
          className={` font-[500]   opacity-50  ${
            hovered && "text-[18px] font-[350]"
          } `}
        >
          {data}
        </Typography>
        <Typography
          variant="h4"
          className={`max-w-[340px] text-[24px] font-[500] leading-[36px]  ${
            hovered && "text-[31px] font-[750] leading-[42px]"
          }`}
        >
          {titlu}
        </Typography>
        <Typography
          variant="paragraph"
          className={`text-[16px] font-[350] leading-[24px]  ${
            hovered && "text-[18px] font-[400] leading-[22px]"
          }`}
        >
          {continut}
        </Typography>

        <Button
          className={`mt-4 bg-transparent text-start text-rosu-brand shadow-none ${
            hovered && "text-[#FCFEFF]"
          }`}
        >
          <span className="text-rosu-brand">Citeste mai mult</span>{" "}
          <ArrowForwardIcon />
        </Button>
      </CardBody>
    </Card>
  );
};

export default CardBlog;
