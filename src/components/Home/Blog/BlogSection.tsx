"use client";
import { Typography } from "@material-tailwind/react";
import CaruselBloguri from "./CaruselBloguri";


const BlogSection = () => {
  return (
    <section className="container  px-6 text-center md:px-0">
      <Typography
        variant="h5"
        className=" mb-[60px] mt-[100px] text-start  font-bold md:text-2xl "
      >
        Cele mai noi articole de pe blog
      </Typography>


      <CaruselBloguri />

    </section>
  );
};

export default BlogSection;
