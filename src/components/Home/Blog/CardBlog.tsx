import { Button, Typography } from "@material-tailwind/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Card, CardContent, CardMedia } from "@mui/material";
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
      elevation={0}
      className={`relative flex h-[550px] w-[20.75rem] flex-col overflow-hidden  rounded-2xl  text-[#383A3C]  ${
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
      {id === 1 && (
        <CardMedia
          component="img"
          className={`  flex  ${
            hovered && "absolute z-10 h-screen w-full   transition  ease-in-out"
          }`}
          image="/imagini/blog1.png"
        />
      )}
      {id === 2 && (
        <CardMedia
          component="img"
          className={`   ${
            hovered && "absolute bottom-0 z-10 h-full transition ease-in-out"
          }`}
          image="/imagini/blog2.png"
        />
      )}
      {id === 3 && (
        <CardMedia
          component="img"
          className={`   ${
            hovered && "absolute bottom-0 z-10 h-full transition ease-in-out"
          }`}
          image="/imagini/blog1.png"
        />
      )}
      <CardContent
        className={`z-20 grid grid-cols-1 gap-2 px-1 text-start lg:gap-4 lg:p-4 ${
          hovered && "h-screen gap-10 px-4 py-24 text-white"
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
          className={`mt-4 bg-transparent text-start text-[#0D34C0] ${
            hovered && "text-[#FCFEFF]"
          }`}
        >
          Citeste mai mult <ArrowForwardIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardBlog;
