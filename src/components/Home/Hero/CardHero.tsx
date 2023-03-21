import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
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
      className={`ext-gri-brand grid h-[185px]  grid-cols-1 items-center justify-between rounded-t-[30px] rounded-br-[30px] border bg-white  px-2  text-center drop-shadow-card-hero  md:h-48 md:w-full  md:px-6 md:pt-2    ${
        icon === "angajator" && "rounded-bl-[30px] rounded-tr-[0px] "
      }  ${icon === "muncitor" && " rounded-bl-[30px] rounded-tl-[0px] "}`}
      id="card-hero"
    >
      {" "}
      <CardContent className=" flex h-full justify-between gap-4 px-2   md:px-0 ">
        <div className="hidden w-1/5 justify-center md:flex ">
          <Image className="h-6 w-6" alt="imagine-hero" src={src} />
        </div>
        <div className="  flex w-full flex-col items-start justify-between  md:w-4/5 ">
          <div className="flex w-full items-center gap-2">
            <div className="flex  md:hidden ">
              <div className="flex py-2">
                <Image className="h-6 w-6" alt="imagine-hero" src={src} />
              </div>
            </div>
            <Typography
              variant="paragraph"
              className="font-bold uppercase text-gri-brand md:text-xl md:capitalize"
            >
              {titlu}
            </Typography>
          </div>
          <Typography
            variant="small"
            className="text-start font-[350] text-gri-brand"
          >
            {descriere}
          </Typography>
          <Link href={`/${link}`} className="w-full ">
            <Button
              variant="text"
              ripple={true}
              className="flex w-full items-center gap-2 px-0 capitalize text-red-800 md:text-left"
            >
              {textButon}
              <ArrowSmallRightIcon strokeWidth={2} className="h-5 w-5" />
            </Button>
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
      className="relative z-20 grid w-full  grid-cols-2 items-center gap-5 px-2  pt-16   md:px-0    lg:pt-0 "
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
