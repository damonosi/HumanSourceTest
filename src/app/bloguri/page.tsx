"use client";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import BlogCover from "../../../public/imagini/blog/heroBlogImg.png";
import PaginatedItems from "./Paginate.jsx";
const BloguriPage = () => {
  return (
    <section className="flex flex-col gap-16  bg-[#E5E5E5] px-4 pb-28 md:px-16">
      <Breadcrumbs
        className="mx-0 my-4 bg-transparent md:my-12"
        fullWidth
        separator=">"
      >
        <Link className="text-colors-gri-brand" href="/">
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
          <Typography className="text-colors-gri-brand" variant="h5">
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
        <PaginatedItems itemsPerPage={9} />
      </div>
    </section>
  );
};

export default BloguriPage;