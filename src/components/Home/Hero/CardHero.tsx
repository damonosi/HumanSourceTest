import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Card, CardContent } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import dateHero from "./dateHero";
interface ICardHero {
  titlu: string;
  icon: string;
  descriere: string;
  link: string;
  textButon: string;
  src: StaticImageData;
}

const CardHero = ({
  titlu,
  icon,
  src,
  descriere,
  link,
  textButon,
}: ICardHero) => {
  return (
    <Card
      className={`grid h-[165px] w-full grid-cols-1 items-center justify-between rounded-t-[30px]  rounded-br-[30px]  border bg-white  px-6  py-2 text-center  lg:h-[194px]  ${
        icon === "angajator" && "rounded-bl-[30px] rounded-tr-[0px] "
      }  ${icon === "muncitor" && " rounded-bl-[30px] rounded-tl-[0px] "}`}
      id="card-hero"
    >
      {" "}
      <CardContent className="flex h-full flex-col gap-6 px-0 ">
        <div className="flex items-center justify-between " id="titlu-card">
          <Image className="h-6 w-6" alt="imagine-hero" src={src} />

          <div className="ml-6 flex w-full ">
            <h1 className=" text-[16px] font-[700] leading-[22px] ">{titlu}</h1>
          </div>
        </div>
        <div
          className="  bg-white text-[14px] font-[350] leading-[18px] text-[#383A3C]"
          id="descriere-card"
        >
          <span>{descriere}</span>
        </div>
        <div
          className="flex  w-full items-center justify-between text-red-700 "
          id="buton-link-container"
        >
          <Link href={`/${link}`} className="w-full ">
            <button className="w-full items-start justify-between text-[14px] font-bold lowercase leading-[16.8px] text-red-700 hover:bg-black ">
              {textButon} <ArrowForwardIcon />
            </button>
          </Link>{" "}
        </div>
      </CardContent>
    </Card>
  );
};

const CarduriHero = () => {
  return (
    <div
      id="container-carduri  "
      className="relative z-20 grid w-full  grid-cols-2   items-center  gap-2 pt-16    lg:pt-0 "
    >
      {dateHero.map(({ titlu, icon, descriere, link, textButon, id, src }) => (
        <CardHero
          key={id}
          src={src}
          titlu={titlu}
          icon={icon}
          descriere={descriere}
          link={link}
          textButon={textButon}
        />
      ))}
    </div>
  );
};

export default CarduriHero;
