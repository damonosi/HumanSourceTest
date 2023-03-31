import { Typography } from "@material-tailwind/react";
import CardBlog from "./CardBlog";
import dateBlog from "./dateBlog";

const BlogSection = () => {
  return (
    <section className="container  text-center">
      <Typography variant="h3" className=" my-24 text-start font-bold">
        Cele mai noi articole de pe blog
      </Typography>

      <div
        className=" flex flex-col items-center justify-center gap-8 md:flex-row md:gap-5 "
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
