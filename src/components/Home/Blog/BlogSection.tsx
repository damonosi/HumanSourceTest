import CardBlog from "./CardBlog";
import dateBlog from "./dateBlog";

const BlogSection = () => {
  return (
    <section className="container  text-center">
      <h3 className=" my-24 font-bold ">Cele mai noi articole de pe blog</h3>

      <div
        className=" flex flex-col items-center justify-center gap-8 md:gap-10 lg:flex-row lg:gap-12"
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
