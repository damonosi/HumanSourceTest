"use client";


import StepsPagination from "./Steps";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";

interface INavigatie {
  onNextPage(): void;
  onPrevPage(): void;
  currentPage: number;
  dataLength: number;
  pageSize: number;
}

const NavigationPagination = ({
  onNextPage,
  onPrevPage,
  currentPage,
  dataLength,
  pageSize,
}: INavigatie) => {
  const isBrowser = () => typeof window !== "undefined"; 

  function scrollToTop() {
    if (!isBrowser()) return;

    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div
      className="relative mt-16 flex w-full justify-between text-gri-brand"
      id="container-butoane-chestionar"
    >
      {currentPage !== 1 ? (
        <button
          className="absolute left-0 rounded-2xl border border-gri-brand py-5 px-8"
          onClick={() => {
            onPrevPage();
            scrollToTop();
          }}
        >
          <IoMdArrowRoundBack />
        </button>
      ) : (
        ""
      )}
      <StepsPagination currentPage={currentPage} data={dataLength} />
      {currentPage !== dataLength ? (
        <button
          className="absolute right-0 rounded-2xl border border-gri-brand py-5 px-8 "
          onClick={() => {
            onNextPage();
            scrollToTop();
          }}
        >
          <IoMdArrowRoundForward />
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavigationPagination;

{
  /* <ul
        className="flex justify-between items-center list-none"
        id="pagination-buttons"
      >

        {pages.map((page) => {
          return (
            <a
              className="cursor-pointer"
              onClick={() => onPageChange(page)}
            >
              <li
                key={page}
                className={
                  page === currentPage
                    ? "flex items-center justify-center w-8 h-8 border border-[#eaeaea ] rounded-lg cursor-pointer bg-red-600"
                    : "flex items-center justify-center w-8 h-8 border border-[#eaeaea ] rounded-lg cursor-pointer"
                }
              >
                {page}
              </li>
            </a>
          );
        })}
      </ul> */
}
