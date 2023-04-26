"use client";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import BlogCover from "../../../public/imagini/blog/heroBlogImg.png";
import PaginatedItems from "./Paginate";


const BloguriPage = () => {
  return (
    <section className="bg-gri-deschis    px-4 pb-[100px] md:px-[70px]">
      <div className="container mx-auto flex flex-col  gap-16 ">
        <Breadcrumbs

        >
          <Link className="text-gri-brand" href="/">
            Home
          </Link>
          <Link className="text-red-600" href="/bloguri">
            Bloguri
          </Link>
        </Breadcrumbs>
        <section
          className="flex w-full flex-col-reverse items-center gap-8 md:flex-row"
          id="hero-bloguri"
        >
          <div
            className="flex flex-col items-start gap-6 md:w-1/2"
            id="container-text-blog"
          >
            <Typography variant="h2">Blogul nostru</Typography>
            <Typography className="text-gri-brand" variant="h5">
              Et semper nulla sit quis feugiat.
            </Typography>
            <Typography variant="paragraph">
              Lorem ipsum dolor sit amet consectetur. Duis faucibus erat
              adipiscing elit ultrices in libero. Tincidunt commodo augue
              consectetur suspendisse ornare elementum. Maecenas hac arcu.
            </Typography>
          </div>
          <div
            className="flex items-center justify-center md:w-1/2"
            id="container-imagine"
          >
            {" "}
            <Image alt="cover-blog" src={BlogCover} />{" "}
          </div>
        </section>
        <div id="container-bloguri">
          <PaginatedItems />
        </div>
      </div>
    </section>
  );
};

export default BloguriPage;
