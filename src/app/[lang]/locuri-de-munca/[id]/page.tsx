"use client";
import muncaFiller from "@/components/Munca/muncaFiller";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface IpageProps {
  params: { lang: string; id: number; };
}

const JobCategory: FC<IpageProps> = ({ params }) => {
  console.log(params)
  return (
    <section className="min-h-screen bg-[#E5E5E5]  text-start md:px-20">
      <div className="container mx-auto grid ">
        {muncaFiller
          .filter((job) => job.id == params.id)
          .map(({ salariu, titlu, id }) =>

            (<div key={id}> {salariu}</div>)

          )
        }
      </div>
    </section>
  );
};

export default JobCategory;
