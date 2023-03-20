import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
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
      className={`grid w-full grid-cols-1 items-center justify-between rounded-t-[30px] rounded-br-[30px]  border  bg-white py-2  px-2 text-center  md:h-[165px] md:px-6  lg:h-[194px]  ${
        icon === "angajator" && "rounded-bl-[30px] rounded-tr-[0px] "
      }  ${icon === "muncitor" && " rounded-bl-[30px] rounded-tl-[0px] "}`}
      id="card-hero"
    >
      {" "}
      <CardContent className=" flex h-full justify-center gap-4 px-2  md:px-0 ">
        <div className="hidden w-1/5 md:flex ">
          <Image className="h-6 w-6" alt="imagine-hero" src={src} />
        </div>
        <div className=" flex w-4/5  flex-col items-start justify-between text-gri-brand ">
          <div className="flex ">
            <div className="flex w-2/5 md:hidden ">
              <Image className="h-6 w-6" alt="imagine-hero" src={src} />
            </div>
            <Typography variant="h6" className="font-bold">
              {titlu}
            </Typography>
          </div>
          <Typography variant="paragraph" className="text-start">
            {descriere}
          </Typography>
          <Link href={`/${link}`} className="w-full ">
            <Button
              variant="text"
              ripple={true}
              className="flex items-center gap-3 px-0 text-left capitalize text-red-800"
            >
              {textButon}
              <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
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
      className="relative z-20 grid w-full  grid-cols-2 items-center gap-2 px-2  pt-16   md:px-0    lg:pt-0 "
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
