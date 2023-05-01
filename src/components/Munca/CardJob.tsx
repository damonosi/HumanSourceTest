"use client";

import { Button, Typography } from "@material-tailwind/react";
import Image, { StaticImageData } from "next/image";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

interface ICardJob {
  data: string;
  titlu: string;
  descriere: string;
  src: StaticImageData;

  salariu?: number;
  id: number;
  params: { lang: string; country: string };
}

const CardJob = ({
  params,
  data,
  titlu,
  descriere,
  id,
  src,
  salariu,
}: ICardJob) => {
  return (
    <div
      key={id}
      className="relative   flex h-[350px]  w-full flex-col justify-end overflow-hidden  rounded-2xl border-none bg-transparent text-[#383A3C]  shadow hover:shadow-xl    md:h-[500px]  "
    >
      <div id="img-container" className=" relative z-40 flex h-2/5  w-full ">
        <Image
          alt="background"
          className="w-full object-fill "
          placeholder="blur"
          src={src}
        />
      </div>
      <div
        key="container-text"
        className="z-20 flex  h-3/5 flex-col justify-center gap-5 py-2 px-4 text-start  "
        id="container-text-bloguri"
      >
        <Typography
          variant="paragraph"
          className="z-20 text-[18px] font-[350]  opacity-50 "
        >
          {data}
        </Typography>
        <Typography variant="h5" className="font-bold ">
          {titlu}
        </Typography>
        <Typography
          variant="paragraph"
          className=" text-[18px] font-[350] leading-[22px]"
        >
          {descriere}
        </Typography>
        <div className="flex justify-between py-5">
          <Link href={`${params.lang}/locuri-de-munca/${id.toString()}`}>
            <Button
              variant="text"
              ripple={true}
              className={`flex w-full items-center gap-2  px-0 capitalize  text-rosu-brand hover:bg-transparent active:bg-transparent md:text-left `}
            >
              Afla mai multe
              <ArrowSmallRightIcon
                strokeWidth={2}
                className="hidden h-5 w-5 hover:flex"
              />
            </Button>
          </Link>
          <Typography
            variant="paragraph"
            className="text-[18px] font-[700] leading-[22px] text-gri-bg"
          >
            {salariu} $
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CardJob;
