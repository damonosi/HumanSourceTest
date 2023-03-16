"use client";
import CardBlogSecundar from "@/components/Blog/CardBlogSecundar";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";

import ReactPaginate from "react-paginate";
import dateBloguri from "../../components/Blog/dateBloguri";

const Items = ({ dateBloguri }) => {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {dateBloguri &&
        dateBloguri.map(({ id, src, data, descriere, categorie, slug }) => (
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
function PaginatedItems({ itemsPerPage }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(dateBloguri.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(dateBloguri.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dateBloguri.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <Items dateBloguri={currentItems} />
      <ReactPaginate
        nextLabel={<Button onClick={scrollToTop}> {">"} </Button>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel={<Button onClick={scrollToTop}> {"<"} </Button>}
        pageClassName="flex "
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="/"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="flex justify-between my-16"
        activeClassName="underline"
      />
    </>
  );
}
export default PaginatedItems;
