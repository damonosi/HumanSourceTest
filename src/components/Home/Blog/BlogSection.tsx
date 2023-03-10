import CardBlog from "./CardBlog";
import dateBlog from "./dateBlog";

const BlogSection = () => {
  return (
    <section className="container pb-32 text-center">
      <h2 className="my-24 text-[1.25rem] font-[700] leading-[1.89rem] lg:text-[1.75rem] lg:leading-[2.625rem]">
        Cele mai noi articole de pe blog
      </h2>

      <div className="flex flex-col items-center  " id="continer-carduri-blog">
        <span className="mb-6 text-[16px] font-[500] leading-[22px] text-[#383A3C] opacity-50">
          Articole Blog
        </span>
        <div className=" flex flex-col gap-8 md:gap-10 lg:flex-row lg:gap-12">
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
      </div>
    </section>
  );
};

export default BlogSection;
