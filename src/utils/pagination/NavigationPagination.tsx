"use client";

import StepsPagination from "./Steps";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";

interface INavigatie {
  onNextPage(): void;
  onPrevPage(): void;
  currentPage: number;
  dataLength: number;
}

const NavigationPagination = ({
  onNextPage,
  onPrevPage,
  currentPage,
  dataLength,
}: INavigatie) => {
  return (
    <div
      className="relative mt-16 flex w-full justify-between text-gri-brand"
      id="container-butoane-chestionar"
    >
      {currentPage !== 1 ? (
        <button
          className="absolute left-0 rounded-2xl border border-gri-brand py-5 px-8"
          onClick={() => onPrevPage()}
        >
          <IoMdArrowRoundBack />
        </button>
      ) : (
        ""
      )}
      <StepsPagination currentPage={currentPage} data={dataLength} />
      {currentPage !== Math.round(dataLength / 9) ? (
        <button
          className="absolute right-0 rounded-2xl border border-gri-brand py-5 px-8 "
          onClick={() => onNextPage()}
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
