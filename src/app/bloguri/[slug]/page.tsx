"use client";
import dateBloguri from "@/components/Blog/dateBloguri";
import { Breadcrumbs } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface IpageProps {
  params: { slug: string };
}

const Blog: FC<IpageProps> = ({ params }) => {
  return (
    <section className="min-h-screen py-6 text-start md:px-20">
      <Breadcrumbs className="px-0 py-6" fullWidth separator=">">
        <Link className="text-colors-gri-brand" href="/">
          Home
        </Link>
        <Link className="text-colors-gri-brand" href="/bloguri">
          Bloguri
        </Link>
        <Link className="text-red-600" href={`/bloguri/${params.slug}`}>
          {params.slug}
        </Link>
      </Breadcrumbs>
      {dateBloguri
        .filter((blog) => blog.slug === params.slug)
        .map(({ src, text, id }) => {
          return (
            <div key={id} className="">
              <div className="flex max-h-[405px] w-full justify-center py-6">
                <Image src={src} className="h-auto w-full" alt="cover-blog" />
              </div>
              <div className="flex flex-col gap-5 text-start">
                <p>By Author Name</p> <p>Luni, 24 Septembrie 2019</p>
                <h4 className="text-start font-bold">
                  Lorem ipsum dolor sit amet consectetur. Magnis sem a.
                </h4>
              </div>
              <div className="py-8">
                <p>{text}</p>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Blog;
