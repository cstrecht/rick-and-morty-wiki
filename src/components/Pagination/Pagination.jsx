import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ page, info, setPage }) => {
  let pageChange = (data) => {
    setPage(data.selected + 1);
  };
  return (
    <ReactPaginate
      className="flex justify-center font-share-tech my-4 text-eletric-green hover:cursor-pointer"
      nextLabel="►"
      nextClassName="px-3 py-2 leading-tight bg-dark-green border rounded-r-lg hover:underline"
      previousLabel="◄"
      previousClassName="px-3 py-2 leading-tight bg-dark-green border rounded-l-lg hover:underline"
      pageClassName="px-3 py-2 leading-tight bg-dark-green border hover:underline"
      pageLinkClassName="text-eletric-green"
      forcePage={0}
      activeClassName="underline"
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      pageCount={info?.pages}
      onPageChange={pageChange}
    />
  );
};
export default Pagination;
