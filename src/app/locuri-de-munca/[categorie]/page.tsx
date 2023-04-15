"use client";
import dateBloguri from "@/components/Blog/dateBloguri";
import muncaFiller from "@/components/Munca/muncaFiller";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface IpageProps {
  params: { categorie: string; };
}

const JobCategory: FC<IpageProps> = ({ params }) => {
  return (
    <section className="min-h-screen bg-[#E5E5E5]  text-start md:px-20">
      <div className="container mx-auto grid ">
        <Breadcrumbs
          className="mx-0 my-4 bg-transparent md:my-6"
          fullWidth
          separator=">"
        >
          <Link className="text-gri-brand" href="/">
            Home
          </Link>
          <Link className="text-gri-brand" href="/bloguri">
            Locuri de munca
          </Link>
          <Link className="text-red-600" href={`/bloguri/${params.categorie}`}>
            {params.categorie}
          </Link>
        </Breadcrumbs>
        {muncaFiller
          .filter((job) => job.categorie === params.categorie)
          .map(({ src, titlu, id }) => {
            return (
              <div key={id} className="">
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
