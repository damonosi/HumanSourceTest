"use client";
import muncaFiller from "@/components/Munca/muncaFiller";
import { Breadcrumbs } from "@material-tailwind/react";

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

          (<div key={id}>
            <Breadcrumbs>
              <Link className="text-gri-brand" href={`/${params.lang}`}>
                Home
              </Link>
              <Link className="text-gri-brand" href={`/${params.lang}/locuri-de-munca`}>
                Locuri de munca
              </Link>
              <Link className="text-red-600" href={`${params.lang}/locuri-de-munca/${params.id}`}>
                {params.id}
              </Link>
            </Breadcrumbs>
            <div>
              <span>{titlu}</span>
              <span>{salariu}</span>
            </div>
          </div>)

          )
        }
      </div>
    </section>
  );
};

export default JobCategory;
