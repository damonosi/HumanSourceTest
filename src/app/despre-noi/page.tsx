"use client";
import PageTransitionWrapper from "@/utils/PageTransitionWrapper";
import { Breadcrumbs } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import Hi5 from "../../../public/imagini/about/hi5.png";

import { CardEchipa, CardValori } from "./CarduriAbout";
import { dateEchipa, dateValori } from "./dateCarduriAbout";

const DespreNoiPage = () => {
  return (
    <PageTransitionWrapper>
      <section className="grid grid-cols-1  gap-16 px-5 py-16 lg:px-20">
        <Breadcrumbs
          className="mx-0 my-12 bg-transparent"
          fullWidth
          separator=">"
        >
          <Link className="text-colors-gri-brand" href="/">
            Home
          </Link>
          <Link className="text-red-600" href="/despre-coi">
            Despre Noi
          </Link>
        </Breadcrumbs>
        <div className="container mx-auto flex w-full flex-col-reverse gap-6  lg:flex-row ">
          <div
            className="grid w-full flex-col items-start gap-6 text-left lg:w-1/2"
            id="text-about"
          >
            <h1 className=" text-bold text-left text-colors-gri-brand ">
              Despre noi
            </h1>
            <h5 className="text-left font-bold text-colors-gri-brand ">
              Companie de resurse umane ce oferă servicii de atât pe partea de
              leasign de personal, recrutare, selecție cât și pe partea de
              payroll si administrare de personal.
            </h5>
            <p className="font text-left font-normal leading-5 text-colors-gri-brand ">
              Lorem ipsum dolor sit amet consectetur. Cras felis tristique
              pharetra magna. Orci quis dui viverra mi lacus amet pulvinar quis.
              Eu auctor ullamcorper imperdiet ultricies amet elementum quam.
              Tellus libero massa laoreet consequat porta id orci tempus.
              Dapibus quis curabitur vitae egestas sit feugiat tristique enim
              id. Enim lacus enim donec eget elementum. Mi imperdiet viverra
              tellus adipiscing amet vel risus. Nulla libero pulvinar nullam
              posuere blandit dignissim viverra eu magna. Blandit euismod risus
              vel leo.
            </p>
          </div>
          <div
            className="flex w-full items-center justify-center lg:w-1/2"
            id="imagine-about"
          >
            {" "}
            <Image alt="imagine-about" className="w-full" src={Hi5} />
          </div>
        </div>
        <section className="flex flex-col gap-16 px-5 lg:px-0">
          <h3 className="bold">Valorile Companiei</h3>
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
            <h3 className="mb-2 font-bold  text-colors-gri-brand ">
              Echipa Noastra
            </h3>
          </div>

          <div className="grid w-full gap-8 md:grid-cols-2 md:px-8 lg:grid-cols-3 ">
            {dateEchipa.map(({ nume, pozitie, src, id }) => (
              <CardEchipa key={id} nume={nume} pozitie={pozitie} src={src} />
            ))}
          </div>
        </section>
      </section>
    </PageTransitionWrapper>
  );
};

export default DespreNoiPage;
