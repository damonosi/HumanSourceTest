"use client";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import CardJob from '@/components/Munca/CardJob';
import muncaFiller from "@/components/Munca/muncaFiller";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
import { GiHospital } from 'react-icons/gi';

const CategorieJoburi = () => {
  const [selectedCategory, setSelectedCategory] = useState('medical');
  const handleSetCategory = (category: string) => {
    setSelectedCategory(category);
  };



  return (
    <section className=" bg-[#E5E5E5] pb-16 md:px-[70px] ">
      <div className="container mx-auto grid grid-cols-1 gap-9">
        <Breadcrumbs

        >
          <Link className="" href="/">
            Home
          </Link>
          <Link className="" href="/locuri-de-munca">
            Locuri de munca
          </Link>
          <Link className="text-red-600 capitalize" href="/locuri-de-munca">
            {selectedCategory}
          </Link>
        </Breadcrumbs>
        <Typography variant="h4" className="text-bold text-left">
          {" "}
          Selecteaza domeniul dorit
        </Typography>
        {/* aici fac callurile pentru joburi dupa categorie */}
        <section className="flex gap-4 flex-col max-w-md md:flex-row">
          <button className={`bg-alb-site rounded-2xl py-2 px-4 flex  items-center gap-x-[10px] ${(selectedCategory === 'medical') && 'text-alb-site bg-rosu-brand'} `} onClick={() => handleSetCategory('medical')}>
            <GiHospital className={` w-[18px] h-[18px] ${(selectedCategory === 'medical') ? 'text-alb-site' : 'text-rosu-brand'} `} />
            <span>Medical</span>
          </button>
          <button className={`bg-alb-site rounded-2xl py-2 px-4 flex  items-center gap-x-[10px] ${(selectedCategory === 'constructii') && 'text-alb-site bg-rosu-brand'} `} onClick={() => handleSetCategory('constructii')}>
            <GiHospital className={` w-[18px] h-[18px] ${(selectedCategory === 'constructii') ? 'text-alb-site' : 'text-rosu-brand'} `} />
            <span>Constructii</span>
          </button>
          <button className={`bg-alb-site rounded-2xl py-2 px-4 flex  items-center gap-x-[10px] ${(selectedCategory === 'transport') && 'text-alb-site bg-rosu-brand'} `} onClick={() => handleSetCategory('transport')}>
            <GiHospital className={` w-[18px] h-[18px] ${(selectedCategory === 'transport') ? 'text-alb-site' : 'text-rosu-brand'} `} />
            <span>Transport</span>
          </button>
        </section>
        {/* joburi dupa categorie */}
        <section className='flex flex-col gap-9'>
          <Typography variant="h4" className="text-bold text-left">     Cele mai cautate locuri de munca
          </Typography>
          <div className='grid grid-cols-3 gap-5' id='container joburi'>
            {muncaFiller
              .filter((job) => job.categorie === selectedCategory)
              .map(({ src, titlu, id, data, descriere, salariu }) => {
                return (
                  <CardJob key={id} id={id} src={src} titlu={titlu} data={data} descriere={descriere} salariu={salariu} />
                );
              })}</div>
        </section>

      </div>
    </section>
  );
};

export default CategorieJoburi;
