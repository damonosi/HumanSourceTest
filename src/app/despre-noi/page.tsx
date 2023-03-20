"use client";
import PageTransitionWrapper from "@/utils/PageTransitionWrapper";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import Hi5 from "../../../public/imagini/about/hi5.png";

import { CardEchipa, CardValori } from "./CarduriAbout";
import { dateEchipa, dateValori } from "./dateCarduriAbout";

const DespreNoiPage = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 bg-[#E5E5E5] px-5 pb-16 md:px-16">
      <Breadcrumbs
        className="justify-starty mx-0 my-4 bg-transparent md:my-12"
        fullWidth
        separator=">"
      >
        <Link className="text-gri-brand" href="/">
          Home
        </Link>
        <Link className="text-red-600" href="/despre-noi">
          Despre Noi
        </Link>
      </Breadcrumbs>
      <div className="container  flex w-full flex-col-reverse gap-6  lg:flex-row ">
        <PageTransitionWrapper
          className="grid w-full  items-start gap-6 text-left lg:w-1/2"
          id="text-about"
        >
          <Typography
            variant="h1"
            className=" text-bold text-left text-gri-brand "
          >
            Despre noi
          </Typography>
          <Typography
            variant="h5"
            className="text-left font-bold text-gri-brand "
          >
            Companie de resurse umane ce oferă servicii de atât pe partea de
            leasign de personal, recrutare, selecție cât și pe partea de payroll
            si administrare de personal.
          </Typography>
          <Typography
            variant="paragraph"
            className="font text-left font-normal leading-5 text-gri-brand "
          >
            Lorem ipsum dolor sit amet consectetur. Cras felis tristique
            pharetra magna. Orci quis dui viverra mi lacus amet pulvinar quis.
            Eu auctor ullamcorper imperdiet ultricies amet elementum quam.
            Tellus libero massa laoreet consequat porta id orci tempus. Dapibus
            quis curabitur vitae egestas sit feugiat tristique enim id. Enim
            lacus enim donec eget elementum. Mi imperdiet viverra tellus
            adipiscing amet vel risus. Nulla libero pulvinar nullam posuere
            blandit dignissim viverra eu magna. Blandit euismod risus vel leo.
          </Typography>
        </PageTransitionWrapper>{" "}
        <div
          className="flex w-full items-center justify-center lg:w-1/2"
          id="imagine-about"
        >
          {" "}
          <Image alt="imagine-about" className="w-full" src={Hi5} />
        </div>
      </div>
      <section className="flex flex-col gap-16 px-5 text-center lg:px-0">
        <Typography variant="h3" className="bold">
          Valorile Companiei
        </Typography>
        <div
          className="container mx-auto grid grid-cols-1 flex-col   gap-5 sm:grid-cols-2 lg:grid-cols-4 "
          id="container-carduri-about"
        >
          {dateValori.map(({ titlu, descriere, src, id }) => (
            <CardValori
              key={id}
              titlu={titlu}
              descriere={descriere}
              src={src}
            />
          ))}
        </div>
      </section>
      <section
        className="flex flex-col items-center py-8  lg:py-16"
        id="container echipa"
      >
        <div className="mb-24 text-center">
          <Typography variant="h3" className="bold text-gri-brand">
            Echipa Noastra
          </Typography>
        </div>

        <div className="grid w-full gap-8 md:grid-cols-2 md:px-8 lg:grid-cols-3 ">
          {dateEchipa.map(({ nume, pozitie, src, id }) => (
            <CardEchipa key={id} nume={nume} pozitie={pozitie} src={src} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default DespreNoiPage;
