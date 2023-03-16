"use client";
import { Card, CardHeader, Typography } from "@material-tailwind/react";
import Image, { StaticImageData } from "next/image";

interface IEchipaInfo {
  src: StaticImageData;
  nume: string;
  pozitie: string;
}
interface IValoriInfo {
  src: StaticImageData;
  titlu: string;
  descriere: string;
}
export const CardEchipa = ({ src, nume, pozitie }: IEchipaInfo) => {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} shadow={false} className="!m-0 !mb-6 ">
        <Image
          src={src}
          alt={nume}
          className=" w-full object-cover object-top"
        />
      </CardHeader>

      <Typography
        variant="h4"
        className="mb-1 text-left text-colors-gri-brand "
      >
        {nume}
      </Typography>

      <Typography
        variant="paragraph"
        className=" mb-3 font-bold text-colors-gri-bg"
      >
        {pozitie}
      </Typography>
    </Card>
  );
};

export const CardValori = ({ titlu, descriere, src }: IValoriInfo) => {
  return (
    <div className="flex flex-col items-center gap-7 rounded-2xl bg-white px-8 py-16  md:px-8 lg:px-6 ">
      <div
        className="flex w-full items-center justify-center p-1"
        id="imgsection"
      >
        <Image alt="icon-card-about" className="h-auto w-12" src={src} />
      </div>
      <div
        className="flex flex-col  items-center gap-6 text-center"
        id="text-section"
      >
        <Typography variant="h6" className=" font-bold text-colors-gri-brand">
          {titlu}
        </Typography>
        <Typography variant="paragraph" className="text-colors-gri-brand">
          {descriere}
        </Typography>
      </div>
    </div>
  );
};
