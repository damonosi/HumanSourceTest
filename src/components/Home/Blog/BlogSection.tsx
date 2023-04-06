import { Typography } from "@material-tailwind/react";
import CardBlog from "./CardBlog";
import dateBlog from "./dateBlog";

const BlogSection = () => {
  return (
    <section className="container  px-6 text-center md:px-0">
      <Typography
        variant="h3"
        className=" mb-[60px] mt-[100px]  text-start font-bold "
      >
        Cele mai noi articole de pe blog
      </Typography>

      <div
        className=" flex flex-col items-center justify-center gap-y-10 md:h-[550px] md:flex-row md:gap-5 "
        id="continer-carduri-blog"
      >
        {dateBlog.map(({ data, titlu, continut, id }) => (
          <CardBlog
            data={data}
            titlu={titlu}
            continut={continut}
            key={id}
            id={id}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
