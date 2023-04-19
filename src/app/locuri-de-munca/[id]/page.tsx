"use client";
import muncaFiller from "@/components/Munca/muncaFiller";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface IpageProps {
  params: { id: number};
}

const JobCategory: FC<IpageProps> = ({ params }) => {
  console.log(params)
  return (
    <section className="min-h-screen bg-[#E5E5E5]  text-start md:px-20">
      <div className="container mx-auto grid ">
       
        {muncaFiller
          .filter((job) => job.id.toString() === params.id)
          .map(({ src, titlu, id ,categorie}) => {
            return (
              <div key={id} className="">
                 <Breadcrumbs
          className="mx-0 my-4 bg-transparent md:my-6 text-gri-brand"
          fullWidth
          separator=">"
        >
          <Link className="" href="/">
            Home
          </Link>
          <Link className="" href="/locuri-de-munca">
            Locuri de munca
          </Link>
          
          <Link className="text-red-600" href={`/locuri-de-munca/${params.id}`}>
            {titlu}
          </Link>
        </Breadcrumbs>
                <div className="flex max-h-[405px] w-full justify-center py-6">
                  <Image src={src} className="h-auto w-full" alt="cover-blog" />
                </div>
                <div className="flex flex-col gap-5 text-start">
                  <Typography variant="small">By Author Name</Typography>{" "}
                  <Typography variant="small">
                    Luni, 24 Septembrie 2019
                  </Typography>
                  <Typography variant="h4" className="text-start font-bold">
                    Lorem ipsum dolor sit amet consectetur. Magnis sem a.
                  </Typography>
                </div>
                <div className="py-8">
                  <Typography variant="paragraph">{titlu}</Typography>
                </div>
              </div>
            );
          })}{" "}
      </div>
    </section>
  );
};

export default JobCategory;
