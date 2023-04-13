"use client";
import CardBlogSecundar from "@/components/Blog/CardBlogSecundar";

import { useState } from "react";

import dateBloguri from "../../components/Blog/dateBloguri";
import { paginate } from "@/utils/pagination/paginate";
import NavigationPagination from "@/utils/pagination/NavigationPagination";
import StepsPagination from "@/utils/pagination/Steps";
import { StaticImageData } from "next/image";

interface IPaginationData {
  currentPage: number;
  bloguri: Array<IPaginatedData>;
}

interface IPaginatedData {
  id: number;
  data: string;
  src: StaticImageData;
  slug: string;
  descriere: string;

  categorie: string;
}

const ContentPagination = ({ currentPage, bloguri }: IPaginationData) => {
  const pageSize = 9;
  const paginatedPosts = paginate(bloguri, currentPage, pageSize);
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {paginatedPosts &&
        paginatedPosts.map(({ id, src, data, descriere, categorie, slug }) => (
          <CardBlogSecundar
            key={id}
            src={src}
            data={data}
            slug={slug}
            descriere={descriere}
            categorie={categorie}
          />
        ))}
    </div>
  );
};
function PaginatedItems() {
  const [currentPage, setCurrentPage] = useState(1);
  const dataLength = dateBloguri.length;
  const onNextPage = () => {
    if (currentPage >= 3) {
      setCurrentPage(3);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };
  const onPrevPage = () => {
    if (currentPage <= 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <ContentPagination currentPage={currentPage} bloguri={dateBloguri} />
      <NavigationPagination
        currentPage={currentPage}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        dataLength={dataLength}
      />
    </>
  );
}
export default PaginatedItems;
