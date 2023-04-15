"use client";
import CardCategorieMunca from "@/components/Munca/CardCategorieMunca";
import { GiHospital } from 'react-icons/gi';
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
import muncaFiller from "@/components/Munca/muncaFiller";
import Image from "next/image";


const CategorieJoburi = () => {
  const [selectedCategory, setSelectedCategory] = useState('medical');
  const handleSetCategory = (category: string) => {
    setSelectedCategory(category);
  };



  return (
    <section className=" bg-[#E5E5E5] pb-16 md:px-[70px] ">
      <div className="container mx-auto grid grid-cols-1 gap-9">
        <Breadcrumbs
          className="mx-0 my-4 bg-transparent px-0 md:my-6"
          fullWidth
          separator=">"
        >
          <Link className="text-gri-brand" href="/">
            Home
          </Link>
          <Link className="text-red-600" href="/locuri-de-munca">
            Locuri de munca
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
              .map(({ src, titlu, id, data, descriere }) => {
                return (
                  <div key={id} className="">
                    <div className="flex max-h-[405px] w-full justify-center py-6">
                      <Image src={src} className="h-auto w-full" alt="cover-blog" />
                    </div>
                    <div className="flex flex-col gap-5 text-start">

                      <Typography variant="small">
                        {data}
                      </Typography>
                      <Typography variant="h6">{titlu}</Typography>
                      <Typography variant="paragraph" className="text-start font-bold">
                        {descriere}
                      </Typography>
                    </div>
                    <div className="py-8">

                    </div>
                  </div>
                );
              })}</div>
        </section>

      </div>
    </section>
  );
};

export default CategorieJoburi;
