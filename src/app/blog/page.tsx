import dateBloguri from "@/components/Blog/dateBloguri";
import Image from "next/image";
import BlogCover from "../../../public/imagini/blog/heroBlogImg.png";
import CardBlogSecundar from "./../../components/Blog/CardBlogSecundar";

const BlogPage = () => {
  return (
    <section className="mx-16 flex flex-col items-center gap-16 py-28 ">
      <section className="flex w-full items-center" id="hero-bloguri">
        <div
          className="flex w-1/2 flex-col items-start"
          id="container-text-blog"
        >
          <h1>Blogul nostru</h1>
          <h5>Et semper nulla sit quis feugiat.</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur. Duis faucibus erat
            adipiscing elit ultrices in libero. Tincidunt commodo augue
            consectetur suspendisse ornare elementum. Maecenas hac arcu.
          </p>
        </div>
        <div
          className="flex w-1/2 items-center justify-center"
          id="container-imagine"
        >
          {" "}
          <Image alt="cover-blog" src={BlogCover} />{" "}
        </div>
      </section>
      <div className="grid gap-5 md:grid-cols-3" id="container-bloguri">
        {dateBloguri.map(({ id, src, data, descriere, categorie }) => (
          <CardBlogSecundar
            key={id}
            src={src}
            data={data}
            descriere={descriere}
            categorie={categorie}
          />
        ))}
        )
      </div>
    </section>
  );
};

export default BlogPage;
